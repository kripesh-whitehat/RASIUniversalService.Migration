const UniversalMigrationService = require('../services/UniversalMigrationService')
const ResponseManager = require('../infra/ResponseManager')
const Message = require('../infra/Messages')

module.exports = {
    bulkExport: async (req, res) => {
        try {
            const response = await UniversalMigrationService.bulkExport(req);

            if (response.err) ResponseManager.errorResponse(res, response.err)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    bulkImport: async (req, res) => {
        try {
            const response = await UniversalMigrationService.bulkImport(req);

            if (response.err) ResponseManager.errorResponse(res, response.err)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
}