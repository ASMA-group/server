const router = require('express').Router()
const ApisController = require('../controllers/apis')

router.get('/love', ApisController.getPercent)
router.post('/chat', ApisController.getChat)
router.get('/person/:gender', ApisController.getPerson)

module.exports = router