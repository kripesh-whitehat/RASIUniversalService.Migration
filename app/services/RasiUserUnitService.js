const RasiUserUnit = require('../models').RasiUserUnit;
const RasiUser = require('../models').RasiUser;
const sequelize = require('../models').Sequelize

module.exports = {

    getAllRasiUser: async () => {
        const rasiUsers = await RasiUser.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [
                { association: 'Clusters', attributes: ['cluster_name'] }
            ]
        });
        return rasiUsers
    },
    getByID: async (req) => {
        const rasiUser = await RasiUserUnit.findByPk(req.params.id);
        return rasiUser
    },

    getClusterByRasiUser: async (req) => {
        const param = parseInt((req.params.user).replace(/\s+/g, ''))
        const digitRegex = /^\d+$/;

        const whereCondition = digitRegex.test(param)
            ? { PortalUserID: param }
            : { Email: { [sequelize.Op.iLike]: `%${param}%` } }

        const rasiUser = await RasiUser.findAll({
            where: whereCondition, attributes: ['PortalUserID', 'FirstName', 'LastName', 'Email']
            , include: { association: 'Clusters', attributes: ['cluster_name', 'hostname', 'slug'], where: { type: 'REGRESSION' } }
        });
        return rasiUser
    },

    getProdClusterByRasiUser: async (req) => {
        const param = parseInt((req.params.user).replace(/\s+/g, ''))
        const digitRegex = /^\d+$/;

        const whereCondition = digitRegex.test(param)
            ? { PortalUserID: param }
            : { Email: { [sequelize.Op.iLike]: `%${param}%` } }

        const rasiUser = await RasiUser.findAll({
            where: whereCondition, attributes: ['PortalUserID', 'FirstName', 'LastName', 'Email']
            , include: { association: 'Clusters', attributes: ['cluster_name', 'hostname', 'slug'], where: { type: 'PROD' } }
        });
        return rasiUser
    },
}