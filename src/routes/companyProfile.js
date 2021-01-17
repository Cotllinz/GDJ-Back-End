const router = require('express').Router()
const { authorization, isRecruiter } = require('../middleware/auth')
const {
  getCompanyProfileById,
  patchCompanyProfile
} = require('../controller/companyProfile')
const uploadImage = require('../middleware/multer')

router.get('/:id', authorization, getCompanyProfileById)

router.patch(
  '/:id',
  authorization,
  isRecruiter,
  uploadImage,
  patchCompanyProfile
)

module.exports = router
