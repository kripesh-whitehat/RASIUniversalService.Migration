const Cluster = require('../../models').Cluster
const axios = require('axios')
const Message = require('../../infra/Messages')
const RasiUser = require('../../models').RasiUser
const { get, _ } = require('lodash')
const FormData = require('form-data')

module.exports = {

    login: async (req) => {
        try {
            const { email, password } = req.body

            const user = await RasiUser.findOne({ where: { Email: _.trim(email) } });
            if (!user) { return { err: Message.INVALID_USER_EMAIL } }

            /*Get PC Portal URL*/
            const cluster = await Cluster.findOne({ where: { id: user.ClusterID } });

            /* Auth in PC portal*/
            const formData = new FormData()
            formData.append('Email', user.Email)
            formData.append('Password', _.trim(password))

            const response = await axios.post( cluster.hostname + '/Account/loginAPI', formData,
                { headers: formData.getHeaders() }, { withCredentials: true })

            if (!get(response, 'data.status')) return { err: get(response, 'data.message') }

            const cookie = get(response, 'headers.set-cookie')

            return { "url": cluster.hostname + "/Account/UniversalRedirect", "payload": cookie.join() }

        } catch (err) {
            return { err: err.message }
        }
    }

}