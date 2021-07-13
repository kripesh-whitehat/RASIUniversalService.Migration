const ResponseManager = require('../../infra/ResponseManager')
const Message = require('../../infra/Messages')
const ApiService = require('../../services/rasi/ApiService')
const Group = require('../../models').Group
const Unit = require('../../models').Unit
const RasiUser = require('../../models').RasiUser
const RasiUserUnit = require('../../models').RasiUserUnit

module.exports = {
    populateGroup: async (req, res, next) => {
        try {
            const response = await ApiService.populateRasiData(req, 'group', { model: Group, fields: null });
            if (response.err) ResponseManager.errorResponse(res, response.err)
            ResponseManager.successResponse(res, Message.SUCCESS)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }

    },
    populateUnit: async (req, res, next) => {
        try {
            const response = await ApiService.populateRasiData(req, 'unit', { model: Unit, fields: null });
            if (response.err) ResponseManager.errorResponse(res, response.err)
            ResponseManager.successResponse(res, Message.SUCCESS)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }

    },
    populateRasiUser: async (req, res, next) => {
        try {
            const response = await ApiService.populateRasiData(req, 'user', { model: RasiUser, fields: null }, { model: RasiUserUnit, fields: null });
            if (response.err) ResponseManager.errorResponse(res, response.err)
            ResponseManager.successResponse(res, Message.SUCCESS)
        } catch (err) {
            ResponseManager.errorResponse(res, err.message)
        }

    }

}