const router = require('express').Router()
const { isSeeker } = require('../middleware/auth')
const uploadFilesUser = require('../middleware/multerUserProfile')

const { register, login, confirmEmail, editProfilePekerja } = require('../controller/user')

// const { notifRedis } = require('../middleware/redis')

router.post('/register', register)
router.post('/login', login)
router.patch('/editprofile/:id', isSeeker, uploadFilesUser, editProfilePekerja)
// router.get('/notif/:id', notif)
router.patch('/activation/:code_confirm', confirmEmail)

module.exports = router
