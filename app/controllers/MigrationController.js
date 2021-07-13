const MigrationService = require('../services/MigrationService');
const ResponseManager = require('../infra/ResponseManager')
const Message = require('../infra/Messages')

module.exports = {
    getMigrations: async (req, res) => {
        try {
            const response = await MigrationService.getMigrations();
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getMigration: async (req, res) => {
        try {
            const response = await MigrationService.getMigration(req)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    createMigration: async (req, res) => {
        try {
            const response = await MigrationService.createMigration(req);
            if (response.err) ResponseManager.errorResponse(res, response.err)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    updateMigration: async (req, res) => {
        try {
            const response = await MigrationService.updateMigration(req);
            if (response.err) ResponseManager.errorResponse(res, response.err)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    startMigration: async (req, res) => {
        try {
            const response = await MigrationService.startMigration(req);
            if (response.err) ResponseManager.errorResponse(res, response.err)
            ResponseManager.successResponse(res, response.message || Message.SUCCESS, response.data)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    cancelMigration: async (req, res) => {
        try {
            const response = await MigrationService.cancelMigration(req);
            if (response.err) ResponseManager.errorResponse(res, response.err)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    resetMigration: async (req, res) => {
        try {
            const response = await MigrationService.resetMigration(req);
            if (response.err) ResponseManager.errorResponse(res, response.err)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    }
}