const BCP = require('bcp')
const fs = require('fs')
const path = require('path')
const { ConnectionPool } = require('mssql')
const queries = require('./queries')
const { checkRDSConnection } = require('./universalMigration/index')
const Migration = require('../models').Migration

const getExportFile = (name, v = '') => path.join(__dirname, '..', '..', '.bcp', `export-${name}${v}.dat`)
const getFormatFile = (name, v = '') => path.join(__dirname, '..', '..', '.bcp', `format-${name}${v}`)


const exportFunc = async ({ migration_id, group_id, cluster_from }) => {  
  const bulkFunc = async (table, options, customOptions) => {
    const bcp = new BCP({
      ...options,
      checkConstraints: false,
      unicode: false,
      native: false,
    });

    return new Promise((resolve, reject) => {
      bcp.bulkExport(table, customOptions, async err => {
        if(err) {
          clog(err)
          reject(err)
        } 
        resolve()
      });
    }) 
  }

  for(let i = 0; i < queries.length; i++) {
    const { table, v = '', sql, database, tableowner } = queries[i]
    const options = {
      ...cluster_from,
      database,
      schema: tableowner,
    }
    const customOptions = {
      read: false,
      keepFiles: true,
      formatFile: getFormatFile(`${database}.${tableowner}.${table}`, v),
      exportFile: getExportFile(`${database}.${tableowner}.${table}`, v),
      sql: `select * ${sql(group_id)}`
    }
    try {
     await bulkFunc(table, options, customOptions)
    } catch (err) {
      clog(err)
      await Migration.update({
        status: 'failed',
        message: 'Error while bulk export.'
      }, { where: { id: migration_id } });
      
      return { err: 'Error while bulk export' }
    }
  }
  await Migration.update({
    status: 'initializing',
    message: 'Bulk export completed.'
  }, { where: { id: migration_id } });
  return { msg: 'Bulk export completed.' }
}

const importFunc = async ({ migration_id, cluster_to }) => {
  const bulkFunc = async (table, options, customOptions, exportFile, formatFile) => {
    const bcp = new BCP({
      ...options,
      checkConstraints: false,
      unicode: false,
      native: true,
    });
    
    return new Promise((resolve, reject) => {
      bcp.bulkInsert(exportFile, { filename: `${formatFile}.fmt.xml` }, table, customOptions, async err => {
        if(err) {
          reject(err)
        }
        resolve()
      })
    }) 
  }

  for(let i = 0; i < queries.length; i++) {
    const { table, v = '', database, tableowner } = queries[i]
    const options = {
      ...cluster_to,
      schema: tableowner,
      database,
    }
    const customOptions = { read: false }

    try {
     await bulkFunc(table, options, customOptions, getExportFile(`${database}.${tableowner}.${table}`, v), getFormatFile(`${database}.${tableowner}.${table}`, v))
    } catch (err) {
      clog(err)
      await Migration.update({
        status: 'failed',
        message: 'Error while bulk import.'
      }, { where: { id: migration_id } });
      
      return { err: 'Error while bulk import' }
    }
  }
  await Migration.update({
    status: 'initializing',
    message: 'Bulk import completed.'
  }, { where: { id: migration_id } });
  return { msg: 'Bulk import completed.' }
}

const removeExistingRecords = async ({ cluster_to, group_id }) => {
  for(let i = queries.length; i > 0; i--) {
    // console.log(`delete ${queries[i - 1].sql(group_id)}`)
    new ConnectionPool({
      ...cluster_to,
      pool: {
        max: 200,
        min: 0,
        idleTimeoutMillis: 30000
      },
      options: {
        trustServerCertificate: true,
        encrypt: true,
      }
    }).connect().then(pool => {
      pool.query(`select * ${queries[i-1].sql(group_id)}`).then(resp => {
        clog(resp)
      })
    }).catch(err => clog(err))
  }
}

const emptyDirFunc = async () => {
  // Delete Files
  await fs.readdir(path.join(__dirname, '..', '..', '.bcp'), (err, files) => {
    if (err) throw err;
  
    for (const file of files) {
      fs.unlink(path.join(__dirname, '..', '..', '.bcp', file), err => {
        if (err) throw err;
      });
    }
  });

}

module.exports = {
  bulkMigration: async props => {
    let connection_error = false
    if(!props.migration_id) {
      await Migration.update({
        message: 'Migration not found.',
      }, { where: { id: props.migration_id } })
      return { msg: 'Migration not found.' }
    }

    if(!connection_error) {
      await emptyDirFunc()
      // await removeExistingRecords(props)

      await exportFunc(props)
      await importFunc(props).then(async res => {
        if(!get(res, 'err')) {
          await Migration.update({
          status: 'successful',
          message: 'Successfully copied.',
          end_datetime: new Date()
          }, { where: { id: props.migration_id } });
        }
      })
      // await emptyDirFunc()
      return {
        msg: 'Successful'
      }
    }
    
    return {
      msg: 'Error while migration'
    }
  }
}

const clog = value => {
  console.dir('===')
  console.dir(value)
  console.dir('===')
}
