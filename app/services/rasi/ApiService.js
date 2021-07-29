const Cluster = require('../../models').Cluster
const sequelize = require('../../models').sequelize
const axios = require('axios')
const Message = require('../../infra/Messages')
const config = require('../../../config')

module.exports = {

    populateRasiData: async (req, type, parent = { model: null, fields: null }, relation = { model: null, fields: null }) => {

        const t = await sequelize.transaction();

        try {
            const cluster = await Cluster.findByPk(req.params.cid);
            if (!cluster) return { err: Message.INVALID_CLUSTER }        

            const url = config.rasiRetrievalAPIUrl + '/' + type + '?cluster=' + cluster.slug;
            const response = await axios.get(url)

            if (!response.data) return { err: Message.NO_DATA }

            const _result = response.data

            if (relation.model !== null) {

                Object.entries(_result).forEach(([key, value]) => value.map(k => k.ClusterID = cluster.id));

                // Delete all model w.r.t cluster ID
                await module.exports.bulkDestroyData(parent.model, cluster.id, t)
                //Insert all model w.r.t cluster ID again
                await module.exports.bulkCreateData(parent.model, _result[Object.keys(_result)[0]], t, parent.fields)

                // Delete all relation model w.r.t cluster ID
                await module.exports.bulkDestroyData(relation.model, cluster.id, t)
                //Insert all relation model model w.r.t cluster ID again
                await module.exports.bulkCreateData(relation.model, _result[Object.keys(_result)[1]], t, relation.fields)

            } else {
                _result.map(k => k.ClusterID = cluster.id)

                // Delete all model w.r.t cluster ID
                await module.exports.bulkDestroyData(parent.model, cluster.id, t)
                // Insert all model w.r.t cluster ID again
                await module.exports.bulkCreateData(parent.model, _result, t, parent.fields)
            }

            return await t.commit();

        } catch (err) {
            return await t.rollback();
        }

    },
    bulkCreateData: async (model, data, transaction, fields = null) => {
        const bulkCreateOptions = { transaction: transaction, raw: true }
        if (fields !== null) bulkCreateOptions.fields = fields
        return await model.bulkCreate(data, bulkCreateOptions);
    },
    bulkDestroyData: async (model, data, transaction) => {
        const bulkDestroyOptions = { transaction: transaction }
        return await model.destroy({ where: { ClusterID: data } }, bulkDestroyOptions);
    }
}