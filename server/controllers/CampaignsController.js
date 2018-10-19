require('../models/Campaign')
const mongoose = require('mongoose')
const Campaign = mongoose.model('campaign')
var logger = require('../log')

exports.listAllCampaings = function(req, res) {
  Campaign.find()
    .then(resp => {
      logger.info(JSON.stringify(resp))
      if(!resp[0]) res.status(400)
      res.send(resp)
    })
    .catch(err => {
      logger.error(JSON.stringify(err))
      res.status(500)
      res.send(err)
    })
}

exports.campaignDetail = function(req, res) {
  logger.info(JSON.stringify(req.params))
  Campaign.find({ id: req.params.id})
    .then(resp => {
      logger.info(JSON.stringify(resp))
      if(!resp.id) res.status(400)
      res.send(resp)
    })
    .catch(err => {
      logger.error(JSON.stringify(err))
      res.status(500)
      res.send(err)
    })
}