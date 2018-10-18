var router = require('express').Router()
var logger = require('../log')
router.get('/', (req, res) => {
  try {
    var fs = require('fs')
    var logPath = logger.transports[0].dirname + '/' + logger.transports[0].filename
    fs.exists(logPath, function (exist) {
      if (exist) {
        fs.readFile(logPath, 'utf-8', function (error, data) {
          var lines = []
          if (!error) {
            lines = data.toString()
              .split('\n')
              .reverse()
              .splice(1, 30)
            for (var i = 0; i < lines.length; i++) {
              lines[i] = JSON.parse(lines[i])
            }
          }
          res.render('../views/logs', { lines: lines })
        })
      }
      else {
        res.render('../views/logs', { lines: [] })
      }
    })
  }
  catch (error) {
    res.status(500).json('Error')
  }
})

module.exports = router
