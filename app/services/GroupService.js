const Group = require('../models').Group;
const sequelize = require('../models').Sequelize
const _ = require('lodash')

module.exports = {

    getAllGroups: async () => {
        const groups = await Group.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: { association: 'Clusters', attributes: ['id', 'cluster_name'] }
        });
        return groups
    },
    getByID: async (req) => {
        const group = await Group.findByPk(req.params.id);
        return group
    },
    getClusterByGroup: async (req) => {
        const whereCondition = /^-?\d+$/.test(req.params.group) ? { GroupID: req.params.group } : { GroupName: { [sequelize.Op.iLike]: `%${req.params.group}%` } }
        const group = await Group.findAll({
            where: whereCondition, attributes: ['GroupID', 'GroupName']
            , include: { association: 'Clusters', attributes: ['cluster_name', 'hostname', 'slug'], where: { type: 'REGRESSION' } }
        });
        return group
    },
    getProdClusterByGroup: async (req) => {
        const group = await Group.findAll({
            where: { GroupName: { [sequelize.Op.iLike]: `%${req.params.group}%` } }, attributes: ['GroupID', 'GroupName']
            , include: { association: 'Clusters', attributes: ['cluster_name', 'hostname', 'slug'], where: { type: 'PROD' } }
        });
        return group
    },

}
