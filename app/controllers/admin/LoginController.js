const ResponseManager = require('../../infra/ResponseManager')
const Message = require('../../infra/Messages')

module.exports = {
  login: (req, res, passport, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) ResponseManager.errorResponse(res, err.message)
      if (!user) ResponseManager.errorResponse(res, info.message, ResponseManager.StatusCode.SUCCESS)
      else {
        req.logIn(user, (err) => {
          if (err) ResponseManager.errorResponse(res, err.message)
          ResponseManager.successResponse(res, Message.SUCCESS, req.user.id)
        });
      }
    })(req, res, next);
  },

  logout: (req, res) => {
    try {
      req.logout();
      ResponseManager.successResponse(res, Message.SUCCESS)
    } catch (err) {
      ResponseManager.errorResponse(res, err.message)
    }
  }
}