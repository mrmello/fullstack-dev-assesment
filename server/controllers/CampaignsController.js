require('../models/Campaign')
const mongoose = require('mongoose')
const Campaign = mongoose.model('campaign')

exports.listAllCampaings = function(req, res) {
  Campaign.find()
    .then(resp => { res.send(resp)})
    .catch(err => {
      res.status(500)
      res.send(err)
    })
}

exports.campaignDetail = function(req, res) {
  Campaign.find({ id: req.params.id})
    .then(resp => { res.send(resp) })
    .catch(err => {
      res.status(500)
      res.send(err)
    })
}