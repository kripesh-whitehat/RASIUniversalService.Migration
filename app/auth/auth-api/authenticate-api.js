const config = require('../../../config')
const Message = require('../../infra/Messages')
const ResponseManager = require('../../infra/ResponseManager');

module.exports = {
    authenticateApi: (req, res, next) => {
        const authHeader = String(req.headers['authorization'] || '');
        const userSecret = (authHeader.startsWith('Bearer ')) ? authHeader.substring(7, authHeader.length) : null;
        if (!userSecret || userSecret.trim() != config.apiAuthenticationSecret.trim()) {
            ResponseManager.errorResponse(res, Message.INVALID_USER_SECRET, ResponseManager.StatusCode.SUCCESS)
        } else { next() }
    }
}