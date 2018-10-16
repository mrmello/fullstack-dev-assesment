const express = require('express')

const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
var campaignsRouter = require('./routes/CampaignsRouter')
require('./db/service')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/campaigns', campaignsRouter)

const port = process.env.PORT

app.listen(port, () => console.log('running...'))

module.exports = app