const router = require('express').Router()
const { authorization, isSeeker, isRecruiter } = require('../middleware/auth')
const uploadFiles = require('../middleware/multerFileHire')

const { hire, notif } = require('../controller/hire')
// const { notifRedis } = require('../middleware/redis')

router.post('/', authorization, isRecruiter, uploadFiles, hire)
router.get('/notif/:id', authorization, isSeeker, notif)

module.exports = router
