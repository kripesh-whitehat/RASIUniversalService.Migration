const UserService = require('../../services/UserService');
const ResponseManager = require('../../infra/ResponseManager')
const Message = require('../../infra/Messages')


module.exports = {

    getAllUsers: async (req, res) => {
        try {
            const response = await UserService.getAllUsers();
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getByID: async (req, res) => {
        try {
            const response = await UserService.getByID(req)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    createUser: async (req, res) => {
        try {
            const response = await UserService.createUser(req);
            if (response.err) ResponseManager.errorResponse(res, response.err, ResponseManager.StatusCode.SUCCESS)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    updateUser: async (req, res) => {
        try {
            const response = await UserService.updateUser(req);
            if (response.err) ResponseManager.errorResponse(res, response.err, ResponseManager.StatusCode.SUCCESS)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    deleteUser: async (req, res) => {
        try {
            const response = await UserService.deleteUser(req);
            if (response.err) ResponseManager.errorResponse(res, response.err, ResponseManager.StatusCode.SUCCESS)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    }

}