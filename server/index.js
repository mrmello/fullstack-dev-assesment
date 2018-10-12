const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Campaign = require('./models/Campaign');
const app = express();
var campaignsRouter = require('./routes/CampaignsRouter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongodb:27017/',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Mongo Connected')
    //seed
    const data = require('./data.json')
    Campaign.deleteMany({}, function(err) {
      if (err) {
        console.log(err)
      } else {
        Campaign.collection.insertMany(data, null)
      }
    })
    return
  })
  .catch(err => console.log(err));

app.use('/campaigns', campaignsRouter);

const port = 3000;

app.listen(port, () => console.log('Server running...'));
