require('../models/Campaign')
const mongoose = require('mongoose')
const { sendErrors } = require('../routes/handleErrors')
const Campaign = mongoose.model('campaign')

exports.listAllCampaings = function(req, res) {
  Campaign.find()
    .then(resp => {
      let arrayStatus = new Array()
      for(let campaign of resp) {
        var map = new Map()
        let index = arrayStatus.findIndex(element => element.has(campaign.status))
        if(index > -1) {
          arrayStatus.splice(index, 1, map.set(campaign.status, [arrayStatus[index].get(campaign.status)[0],campaign]))
        } else {
          arrayStatus.push(map.set(campaign.status, [campaign]))
        }
      }
      console.log(arrayStatus)
      res.send(arrayStatus)
    })
    .catch(err => {sendErrors(err)})
}

exports.campaignDetail = function(req, res) {
  Campaign.find({ id: req.params.id})
    .then(resp => { res.send(resp) })
    .catch(err => { sendErrors(res, err) })
}