const Cluster = require('../models').Cluster;

module.exports = {

    getAllClusters: async () => {
        const clusters = await Cluster.findAll();
        return clusters
    },
    getByID: async (req) => {
        const cluster = await Cluster.findByPk(req.params.id);
        return cluster
    },
    createCluster: async (req) => {
        try {
            const data = req.body;
            data.created_by = 1;
            const newCluster = await Cluster.create(data);
            return newCluster.id;
        } catch (err) {
            return (err.errors) ? { err: err.errors[0].message } : { err: err.name }
        }
    },
    updateCluster: async (req) => {
        try {
            const data = req.body;
            data.updated_by = 1;
            const updatedCluster = await Cluster.update(data, { where: { id: req.params.id } });
            return updatedCluster;
        } catch (err) {            
            return (err.errors) ? { err: err.errors[0].message } : { err: err.name }
        }
    },
    deleteCluster: async (req) => {
        try {
            const deletedCluster = await Cluster.destroy({ where: { id: req.params.id } });
            return deletedCluster
        } catch (err) {
            return (err.errors) ? { err: err.errors[0].message } : { err: err.name }
        }
    }

}