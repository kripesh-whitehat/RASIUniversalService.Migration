const GroupService = require('../services/GroupService');
const ResponseManager = require('../infra/ResponseManager')
const Message = require('../infra/Messages')

module.exports = {

    getAllGroups: async (req, res) => {
        try {
            const response = await GroupService.getAllGroups();
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getByID: async (req, res) => {
        try {
            const response = await GroupService.getByID(req)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getClusterByGroup: async (req, res) => {
        try {
            const response = await GroupService.getClusterByGroup(req);
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getProdClusterByGroup: async (req, res) => {
        try {
            const response = await GroupService.getProdClusterByGroup(req);
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
}