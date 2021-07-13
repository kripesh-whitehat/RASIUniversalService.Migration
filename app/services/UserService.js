const bcrypt = require('bcrypt');
const User = require('../models').User;

module.exports = {

    getAllUsers: async () => {
        const users = await User.findAll({ attributes: { exclude: ['password'] } });
        return users
    },
    getByID: async (req) => {
        const user = await User.findByPk(req.params.id, { attributes: { exclude: ['password'] } });
        return user
    },
    createUser: async (req) => {
        try {
            const data = req.body
            const hashedPassword = await bcrypt.hash(data.password, 10);
            data.password = hashedPassword
            data.created_by = 1
            const newUser = await User.create(data);
            return newUser.id;
        } catch (err) {
            return (err.errors) ? { err: err.errors[0].message } : { err: err.name }
        }

    },
    updateUser: async (req) => {
        try {
            const data = req.body
            data.updated_by = 1
            const updatedUser = await User.update(data, { where: { id: req.params.id } });
            return updatedUser;
        } catch (err) {
            return (err.errors) ? { err: err.errors[0].message } : { err: err.name }
        }
    },
    deleteUser: async (req) => {
        try {
            const deletedUser = await User.destroy({ where: { id: req.params.id } });
            return deletedUser
        } catch (err) {
            return (err.errors) ? { err: err.errors[0].message } : { err: err.name }
        }
    }

}