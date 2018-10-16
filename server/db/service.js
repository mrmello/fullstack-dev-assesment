const mongoose = require('mongoose')
const Campaign = require('../models/Campaign')
var data = require('./data.json')
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27018/'

// Connect to MongoDB
mongoose.connect(mongoUrl,{ useCreateIndex: true, useNewUrlParser: true })
  .then(() => {
    //seed
    Campaign.deleteMany({}, function(err) {
      if (err) {
        console.log(err)
      } else {
        Campaign.collection.insertMany(data, null)
      }
    })
    return
  })
  .catch(err => console.log(err))