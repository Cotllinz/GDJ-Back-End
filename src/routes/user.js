const router = require('express').Router()

const { register, login, confirmEmail } = require('../controller/user')
// const { notifRedis } = require('../middleware/redis')

router.post('/register', register)
router.post('/login', login)
// router.get('/notif/:id', notif)
router.patch('/activation/:code_confirm', confirmEmail)

module.exports = router
