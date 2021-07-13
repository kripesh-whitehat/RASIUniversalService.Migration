const RasiUserUnitService = require('../services/RasiUserUnitService');
const ResponseManager = require('../infra/ResponseManager')
const Message = require('../infra/Messages')

module.exports = {

    getAllRasiUser: async (req, res) => {
        try {
            const response = await RasiUserUnitService.getAllRasiUser();
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getByID: async (req, res) => {
        try {
            const response = await RasiUserUnitService.getByID(req)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getClusterByRasiUser: async (req, res) => {
        try {
            const response = await RasiUserUnitService.getClusterByRasiUser(req);
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getProdClusterByRasiUser: async (req, res) => {
        try {
            const response = await RasiUserUnitService.getProdClusterByRasiUser(req);
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
}