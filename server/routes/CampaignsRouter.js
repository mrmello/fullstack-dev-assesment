var router = require('express').Router();
const CampaignsController = require('../controllers/CampaignsController')

// Product Routes //
router.get('/', CampaignsController.listAllCampaings);
router.get('/:id', CampaignsController.campaignDetail);

module.exports = router;
