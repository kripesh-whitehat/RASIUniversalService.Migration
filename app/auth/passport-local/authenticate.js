const Message = require('../../infra/Messages')
const ResponseManager = require('../../infra/ResponseManager')
module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    } else {
        ResponseManager.successResponse(res, Message.UNAUTHENTICATED_USER)
    }
}
