const BCP = require('bcp')
const fs = require('fs')
const path = require('path')
const { connect, query } = require('mssql')
const { get } = require('lodash')

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
      native: true,
    });

    return new Promise((resolve, reject) => {
      bcp.bulkExport(table, customOptions, async err => {
        if(err) {
          reject(err)
        } 
        resolve()
      });
    }) 
  }

  for(let i = 0; i < queries.length; i++) {
    const { table, v, sql, database } = queries[i]
    const options = {
      ...cluster_from,
      database,
    }
    const customOptions = {
      read: false,
      keepFiles: true,
      formatFile: getFormatFile(table, v),
      exportFile: getExportFile(table, v),
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
    const { table, v, database } = queries[i]
    const options = {
      ...cluster_to,
      database,
    }
    const customOptions = {read: false }

    try {
     await bulkFunc(table, options, customOptions, getExportFile(table, v), getFormatFile(table, v))
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
  // later exchange to cluster_from since we are removing from cluster A
  const sqlConfig = {
    ...cluster_to,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      trustServerCertificate: true
    }
  }

  // for(let i = 0; i < queries.length; i++) {
  //   try {
  //     await connect(sqlConfig)
  //     await query(`delete from RSIAccounting.dbo.CorporateFinancialStatementBody where CorporateFinancialStatementLayoutID in (select CorporateFinancialStatementLayoutID from RSIAccounting.dbo.CorporateFinancialStatementLayout where CorporateID = ${group_id}`)
  //    } catch (err) {
  //      clog(err)
  //    }
  // }

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
    if(!props.migration_id) return { msg: 'Migration not found.' }
    
    // Check connection cluster_from
    await checkRDSConnection(get(props, 'cluster_from', {}), 'Cluster A').then(async ({ status, message }) => {
      if(status === 'error') connection_error = true
      await Migration.update({
        message,
      }, { where: { id: props.migration_id } });
    })
    // Check connection cluster_to
    await checkRDSConnection(get(props, 'cluster_to', {}), 'Cluster B').then(async ({ status, message }) => {
      let resp_message = message
      if(connection_error) {
        if(status === 'error') {
          resp_message = 'Cluster AB connection unsuccessful'
          await Migration.update({
            message: resp_message,
          }, { where: { id: props.migration_id } })
        }
      } else {
        if(status === 'error') connection_error = true
        await Migration.update({
          message: resp_message,
        }, { where: { id: props.migration_id } })
      }
    })

    if(!connection_error) {
      await emptyDirFunc()
      await exportFunc(props)
      await importFunc(props).then(async res => {
        if(!get(res, 'err')) {
          // await removeExistingRecords(props)

          await Migration.update({
          status: 'successful',
          message: 'Successfully copied.',
          end_datetime: new Date()
          }, { where: { id: props.migration_id } });
        }
      })
      await emptyDirFunc()
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
