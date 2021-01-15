const router = require('express').Router()
const uploadFiles = require('../middleware/multerFileHire')

const { hire, notif } = require('../controller/hire')
// const { notifRedis } = require('../middleware/redis')

router.post('/', uploadFiles, hire)
router.get('/notif/:id', notif)

module.exports = router
