
const express = require('express')
const router = express.Router()

const urlController = require('../Controller/UrlController')

router.post('/' , urlController.handleGenerateUrl)
router.get('/:shortId',urlController.geturl)
router.get('/analytics/:shortId',urlController.handleGetAAnalytics)
 
module.exports = router 
