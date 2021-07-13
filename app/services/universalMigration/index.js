const { connect } = require('mssql')

module.exports = {
	checkRDSConnection: async (cluster, cluster_name = 'Cluster') => {
		try {
			const sqlConfig = {
				...cluster,
				pool: {
					max: 10,
					min: 0,
					idleTimeoutMillis: 30000
				},
				options: { trustServerCertificate: true }
			}
			await connect(sqlConfig)
			return {
				status: 'success',
				message: `${cluster_name} connection successful`
			}
		} catch (err) {
			return {
				status: 'error',
				message: `${cluster_name} connection unsuccessful`
			}
		}
	},
}