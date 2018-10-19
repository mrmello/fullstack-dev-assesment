const router = require('express').Router()
const logger = require('../log')
const yaml = require('js-yaml')
const fs   = require('fs')

router.get('/', (req, res) => {
  try {
    var doc = yaml.safeLoad(fs.readFileSync(__dirname + '/../swagger/swagger.yaml', 'utf8'))
    res.send(doc)
  } catch (e) {
    logger.error(e)
    res.status(500).json(e)
  }
})

module.exports = router
