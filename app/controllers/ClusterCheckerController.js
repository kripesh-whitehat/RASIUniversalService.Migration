const ClusterCheckerService = require('../services/ClusterCheckerService');
const ResponseManager = require('../infra/ResponseManager')
const Message = require('../infra/Messages')

module.exports = {

    findClusterByUnit: async (req, res) => {
        try {
            const response = await ClusterCheckerService.findClusterByUnitId(req.params.unitId, req.params.clusterName);
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    },
    findClusterByGroup: async(req, res) => {
        try {
            const response = await ClusterCheckerService.findClusterByGroupName(req.params.groupName, req.params.clusterName);
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    }

}