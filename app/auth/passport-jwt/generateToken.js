const config = require('../../../config')
const jwt = require('jsonwebtoken')
const User = require('../../models').User;
const bcrypt = require('bcrypt');
const Message = require('../../infra/Messages')
const ResponseManager = require('../../infra/ResponseManager');

module.exports = {
    signToken: user => {
        return jwt.sign({
            iss: 'RasiUniversalServices',
            sub: user.id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        }, config.secretOrKey);
    },
    generateToken: async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });
        if (user == null) {
            ResponseManager.errorResponse(res, Message.INVALID_USER_EMAIL)
        }
        if (await bcrypt.compare(password, user.password)) {
            ResponseManager.successResponse(res, Message.SUCCESS, { _token: module.exports.signToken(user) })
        } else {
            ResponseManager.errorResponse(res, Message.INVALID_USER_PASSWORD)
        }
    }

}