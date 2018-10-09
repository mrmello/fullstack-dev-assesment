const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Campaign = require('./models/Campaign');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

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

app.get('/', (req, res) => {
  Campaign.find( {id: 100000002})
    .then(items => res.send(items))
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));
