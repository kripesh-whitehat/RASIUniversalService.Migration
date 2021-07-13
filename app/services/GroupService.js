const Group = require('../models').Group;
const sequelize = require('../models').Sequelize

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
        const unit = await Group.findAll({
            where: { GroupName: { [sequelize.Op.iLike]: `%${req.params.group}%` } }, attributes: ['GroupID', 'GroupName']
            , include: { association: 'Clusters', attributes: ['cluster_name', 'hostname', 'slug'], where: { type: 'REGRESSION' } }
        });
        return unit
    },
    getProdClusterByGroup: async (req) => {
        const unit = await Group.findAll({
            where: { GroupName: { [sequelize.Op.iLike]: `%${req.params.group}%` } }, attributes: ['GroupID', 'GroupName']
            , include: { association: 'Clusters', attributes: ['cluster_name', 'hostname', 'slug'], where: { type: 'PROD' } }
        });
        return unit
    },

}
