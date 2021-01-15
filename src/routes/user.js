const router = require('express').Router()
const { isSeeker } = require('../middleware/auth')
const uploadFilesUser = require('../middleware/multerUserProfile')

const {
  register,
  login,
  confirmEmail,
  editProfilePekerja,
  SendEmailForgotPassword,
  updatePasswordonForgetPass
} = require('../controller/user')

// const { notifRedis } = require('../middleware/redis')

router.post('/register', register)
router.post('/login', login)
router.post('/forgot', SendEmailForgotPassword)
router.patch('/editprofile/:id', isSeeker, uploadFilesUser, editProfilePekerja)
router.patch('/resetPassword', updatePasswordonForgetPass)
// router.get('/notif/:id', notif)
router.patch('/activation/:code_confirm', confirmEmail)

module.exports = router
