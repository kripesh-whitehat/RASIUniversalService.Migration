const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('../../../config')
const User = require('../../models').User
const Message = require('../../infra/Messages')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = config.secretOrKey

const authenticate = async (jwt_payload, done) => {
    try {
        const user = await User.findOne({ where: { id: jwt_payload.sub } })
        if (user == null) return done(null, false, { message: Message.UNAUTHENTICATED_USER })
        return done(null, user)
    } catch (err) {
        return done(err, false)
    }
}
module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, authenticate)
    )
}
