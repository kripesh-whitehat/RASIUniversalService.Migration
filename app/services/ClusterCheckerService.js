const Unit = require('./UnitService');
const Group = require('./GroupService');

module.exports = {
    findClusterByUnitId: async (unitID, currentCluster) => {
        const clusterInfo = await Unit.getClusterByUnit({ params: { unitID }});
        const clusterJson = JSON.parse(JSON.stringify(clusterInfo))
        let allClusters = []
        if (clusterJson.length > 0) {
            clusterJson.forEach(clusterData => {
                const cluster = clusterData.Clusters.hostname.split(".")[1]
                allClusters.push(cluster)
            })
        }
        for (i = 0; i < allClusters.length; i++) {
            if (allClusters[i] === currentCluster) {
                return { status: true, incluster: true }
            }
        }
        return { status: true, incluster: false }
    },
    findClusterByGroupName: async (group, currentCluster) => {
        const clusterInfo = await Group.getClusterByGroup({ params: { group }});
        const clusterJson = JSON.parse(JSON.stringify(clusterInfo))
        console.log(clusterInfo)
        let allClusters = []
        if (clusterJson.length > 0) {
            clusterJson.forEach(clusterData => {
                const cluster = clusterData.Clusters.hostname.split(".")[1]
                allClusters.push(cluster)
            })
        }
        for (i = 0; i < allClusters.length; i++) {
            if (allClusters[i] === currentCluster) {
                return { status: true, incluster: true }
            }
        }
        return { status: true, incluster: false }
    }

}