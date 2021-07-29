const ResponseManager = require('../../infra/ResponseManager')
const Message = require('../../infra/Messages');
const UniversalLoginService = require('../../services/rasi/UniversalLoginService');

module.exports = {
    login: async (req, res) => {
        try {
            const response = await UniversalLoginService.login(req);
            if (response.err) return ResponseManager.errorResponse(res, response.err, ResponseManager.StatusCode.SUCCESS)
            ResponseManager.successResponse(res, Message.SUCCESS, response)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }
    }
}