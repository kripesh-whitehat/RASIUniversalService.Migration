const ClusterService = require('../services/ClusterService');
const ResponseManager = require('../infra/ResponseManager')
const Message = require('../infra/Messages')

module.exports = {

    getAllClusters: async (req, res) => {
        try {
            const response = await ClusterService.getAllClusters();
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getByID: async (req, res) => {
        try {
            const response = await ClusterService.getByID(req)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    createCluster: async (req, res) => {
        try {
            const response = await ClusterService.createCluster(req);
            if (response.err) ResponseManager.errorResponse(res, response.err,ResponseManager.StatusCode.SUCCESS)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    updateCluster: async (req, res) => {
        try {
            const response = await ClusterService.updateCluster(req);
            if (response.err) ResponseManager.errorResponse(res, response.err,ResponseManager.StatusCode.SUCCESS)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    deleteCluster: async (req, res) => {
        try {
            const response = await ClusterService.deleteCluster(req);
            if (response.err) ResponseManager.errorResponse(res, response.err,ResponseManager.StatusCode.SUCCESS)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    getAllClustersSpecificInfo: async (req, res) => {
        try {
            const response = await ClusterService.getAllClustersSpecificInfo();
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    }

}