const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
let app = express()
const campaignsRouter = require('./routes/CampaignsRouter')
const logsRouter = require('./routes/LogsRouter')
const swaggerRouter = require('./routes/SwaggerRouter')
const logger = require('./log')
require('./db/service')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.set('view engine', 'ejs')
app.use('/campaigns', campaignsRouter)
app.use('/logs', logsRouter)
app.use('/swagger', swaggerRouter)

const port = process.env.PORT

app.listen(port, () => logger.info('running...'))

module.exports = app