const router = require('express').Router()
// const { authorization, isSeeker, isRecruiter } = require('../middleware/auth')
const uploadFiles = require('../middleware/multerFileHire')

const { hire, notif } = require('../controller/hire')
const { notifRedis, clearRedis } = require('../middleware/redis')

router.post('/', clearRedis, uploadFiles, hire)
router.get('/notif/:id', notifRedis, notif)

module.exports = router
