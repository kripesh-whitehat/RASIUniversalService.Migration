var User = require('../../models').User;
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;
const Message = require('../../infra/Messages')

module.exports = function (passport) {

  const authenticateUser = async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email: email } });
      if (user == null) {
        return done(null, false, { message: Message.INVALID_USER_EMAIL });
      }
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: Message.INVALID_USER_PASSWORD })
      }
    } catch (err) {
      return done(err)
    }
  }

  passport.use(new localStrategy({ usernameField: 'email' }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser(async (id, done) => {
    return done(null, await User.findByPk(id, {
      attributes: {
        exclude: ['firstname','lastname', 'password', 'createdAt', 'deletedAt',
          'updatedAt', 'created_by', 'updated_by']
      }
    }));
  })

};