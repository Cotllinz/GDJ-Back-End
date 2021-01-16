const router = require('express').Router()
const { authorization, isSeeker, isReqruiter } = require('../middleware/auth')
const uploadFilesUser = require('../middleware/multerUserProfile')

const {
  register,
  confirmEmail,
  SendEmailForgotPassword,
  updatePasswordonForgetPass,
  loginRequiter,
  loginJobSeeker,
  editProfilePekerja
} = require('../controller/user')

router.post('/register', register)
router.post('/forgot', SendEmailForgotPassword)
router.patch('/resetPassword', updatePasswordonForgetPass)
router.patch('/activation/:code_confirm', confirmEmail)
router.post('/loginrequiter', authorization, isReqruiter, loginRequiter)
router.post('/loginjobseeker', authorization, isSeeker, loginJobSeeker)
router.patch('/editprofile/:id', authorization, isSeeker, uploadFilesUser, editProfilePekerja)

module.exports = router
