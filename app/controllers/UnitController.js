const UnitService = require('../services/UnitService');
const ResponseManager = require('../infra/ResponseManager')
const Message = require('../infra/Messages')

module.exports = {

    getAllUnits: async (req, res) => {
        try {
            const response = await UnitService.getAllUnits();
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getByID: async (req, res) => {
        try {
            const response = await UnitService.getByID(req)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getClusterByUnit: async (req, res) => {
        try {
            const response = await UnitService.getClusterByUnit(req);
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getProdClusterByUnit: async (req, res) => {
        try {
            const response = await UnitService.getProdClusterByUnit(req);
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
}