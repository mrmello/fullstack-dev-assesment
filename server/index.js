const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
var campaignsRouter = require('./routes/CampaignsRouter')
var logsRouter = require('./routes/LogsRouter')
const logger = require('./log')
require('./db/service')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.set('view engine', 'ejs')
app.use('/campaigns', campaignsRouter)
app.use('/logs', logsRouter)

const port = process.env.PORT

app.listen(port, () => logger.info('running...'))

module.exports = app