const router = require('express').Router()
const { isSeeker } = require('../middleware/auth')
const uploadFiles = require('../middleware/multerFileHire')
const uploadFilesUser = require('../middleware/multerUserProfile')

const { register, login, hire, notif, editProfilePekerja } = require('../controller/user')
// const { notifRedis } = require('../middleware/redis')




router.post('/register', register)
router.post('/login', login)
router.post('/hire', uploadFiles, hire)
router.get('/notif/:id', notif)
router.patch('/editprofile/:id', isSeeker, uploadFilesUser, editProfilePekerja)

module.exports = router
