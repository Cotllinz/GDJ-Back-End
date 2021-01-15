const router = require('express').Router()
const { authorization, isSeeker, isReqruiter } = require('../middleware/auth')
const uploadFilesUser = require('../middleware/multerUserProfile')

const { register, loginRequiter, loginJobSeeker, confirmEmail, editProfilePekerja } = require('../controller/user')

// const { notifRedis } = require('../middleware/redis')

router.post('/register', register)
router.post('/loginrequiter', authorization, isReqruiter, loginRequiter)
router.post('/loginjobseeker', authorization, isSeeker, loginJobSeeker)
router.patch('/editprofile/:id', authorization, isSeeker, uploadFilesUser, editProfilePekerja)
// router.get('/notif/:id', notif)
router.patch('/activation/:code_confirm', confirmEmail)

module.exports = router
