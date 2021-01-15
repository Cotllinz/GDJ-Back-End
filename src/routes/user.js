const router = require('express').Router()
const uploadFiles = require('../middleware/multerFileHire')

const { register, login, hire, notif } = require('../controller/user')
// const { notifRedis } = require('../middleware/redis')

router.post('/register', register)
router.post('/login', login)
router.post('/hire', uploadFiles, hire)
router.get('/notif/:id', notif)

module.exports = router
