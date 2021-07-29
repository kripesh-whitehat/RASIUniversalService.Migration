const { get, length } = require('lodash')
const UniMigrationService = require('./UniMigrationService');
const Migration = require('../models').Migration;

module.exports = {
    getMigrations: async () => {
        const migrations = await Migration.findAll({
            include: [
                { association: 'Clusters From' },
                { association: 'Clusters To' },
                { association: 'Groups' }
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        return migrations
    },
    getMigration: async (req) => {
        const id = get(req, 'params.id')
        const migration = await Migration.findByPk(id, {
             include: [
                { association: 'Clusters From' },
                { association: 'Clusters To' },
                { association: 'Groups' }
            ]
        });
        
        return migration
    },
    createMigration: async (req) => {
        try {
            const migration = await Migration.create(req.body);
            migration.save;
            return migration;
        } catch (err) {
            return { err: err.errors }
        }
    },
    updateMigration: async (req) => {
        try {
            const migration = await Migration.update(req.body, { where: { id: req.params.id } });
            
            return migration;
        } catch (err) {
            return { err: err.errors }
        }
    },
    startMigration: async (req) => {
        try {
            const id = get(req, 'params.id')
            
            if(!id)
                return { message: 'ID not found.' }

            let migration = await Migration.findByPk(id, {
                include: [
                   { association: 'Clusters From' },
                   { association: 'Clusters To' },
                   { association: 'Groups' }
               ]
           })
           
            if(get(migration, 'dataValues.status') !== 'pending' && get(migration, 'dataValues.status') !== 'failed') 
                return { message:  'Migration cannot be initialized.' }
            
            if (!get(migration, 'dataValues.["Clusters From"]') || !get(migration, 'dataValues["Clusters To"]') || !get(migration, 'dataValues.["Clusters From"].rds_hostname') || !get(migration, 'dataValues.["Clusters To"].rds_hostname')) 
                return { message:  'Cluster information missing for migration.' }

            let migrations = await Migration.findAll({
                where: {
                    status: 'initializing'
                }
            })

            if(migrations.length > 0)
                return { message: 'Another Migration is initializing.' }

            await Migration.update({
                status: 'initializing',
                message: 'Migration Initializing',
                start_datetime: new Date()
            }, { where: { id: id } });
            
            await UniMigrationService.bulkMigration({
                migration_id: id,
                group_id    : get(migration, 'dataValues.Groups.GroupID'),
                cluster_from: {
                    server: get(migration, 'dataValues["Clusters From"].rds_hostname'),
                    user: get(migration, 'dataValues.rds_username_from'),
                    password: get(migration, 'dataValues.rds_password_from')
                },
                cluster_to: {
                    server: get(migration, 'dataValues["Clusters To"].rds_hostname'),
                    user: get(migration, 'dataValues.rds_username_to'),
                    password: get(migration, 'dataValues.rds_password_to')
                }
            })
            return { message: 'Migration Initializing' }
        } catch (err) {
            return { err: err.errors }
        }   
    },
    cancelMigration: async (req) => {
        try {
            // run only if status = pending
            const id = get(req, 'params.id')
            if(!id)
                return { message: 'ID not found.' }

            let migration = await Migration.findByPk(id)

            if(get(migration, 'dataValues.status') === 'initializing' || get(migration, 'dataValues.status') === 'successful') 
                return { message:  'Migration cannot be cancelled.' }
      
            await Migration.update({
                cancellation_status: true,
            }, { where: { id } });

            migration = await Migration.findByPk(id)
            return { data: migration, message: 'Migration Cancelled.' };
        } catch (err) {
            return { err: err.errors }
        }
    },
    resetMigration: async (req) => {
        try {
            const id = get(req, 'params.id')
            if(!id)
                return { message: 'ID not found.' }

            const migration = await Migration.update({
                status: 'pending',
                message: '',
                start_datetime: null,
                end_datetime: null,
                cancellation_status: false
            }, { where: { id } });
            
            return migration;
        } catch (err) {
            return { err: err.errors }
        }
    },
}