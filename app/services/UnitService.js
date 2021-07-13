const Unit = require('../models').Unit;

module.exports = {

    getAllUnits: async () => {
        const units = await Unit.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [
                { association: 'Clusters', attributes: ['id', 'cluster_name'] },
                { association: 'Groups', attributes: ['GroupName'] }
            ]
        });
        return units
    },
    getByID: async (req) => {
        const unit = await Unit.findByPk(req.params.id);
        return unit
    },

    getClusterByUnit: async (req) => {
        const unit = await Unit.findAll({
            where: { UnitID: req.params.unitID }, attributes: ['UnitID', 'UnitName'],
            include: { association: 'Clusters', attributes: ['cluster_name', 'hostname', 'slug'], where: { type: 'REGRESSION' } }
        });
        return unit
    },

    getProdClusterByUnit: async (req) => {
        const unit = await Unit.findAll({
            where: { UnitID: req.params.unitID }, attributes: ['UnitID', 'UnitName'],
            include: { association: 'Clusters', attributes: ['cluster_name', 'hostname', 'slug'], where: { type: 'PROD' } }
        });
        return unit
    },
}