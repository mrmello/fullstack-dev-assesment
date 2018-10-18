const { createLogger, transports} = require('winston')
const fs = require('fs')
const logDir = 'logs'

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}
var logger = createLogger({
  transports: [
    new transports.File({
      filename: `${logDir}/application.log`,
      level: 'info',
      maxsize: 100000,
      maxFiles: 10,
      handleExceptions: true,
      json: true,
      stringify: (obj) => JSON.stringify(obj)
    })
  ]
})

module.exports = logger
