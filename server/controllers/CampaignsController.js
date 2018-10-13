require('../models/Campaign')
const mongoose = require('mongoose')
const { sendErrors } = require('../routes/handleErrors')
const Campaign = mongoose.model('campaign')

exports.listAllCampaings = function(req, res) {
  Campaign.find()
    .then(resp => { res.send(resp)})
    .catch(err => { sendErrors(res, err) })
}

exports.campaignDetail = function(req, res) {
  Campaign.find({ id: req.params.id})
    .then(resp => { res.send(resp) })
    .catch(err => { sendErrors(res, err) })
}