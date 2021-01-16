const router = require('express').Router()
const {
  getCompanyProfileById,
  patchCompanyProfile
} = require('../controller/companyProfile')
const uploadImage = require('../middleware/multer')

router.get('/:id', getCompanyProfileById)

router.patch('/:id', uploadImage, patchCompanyProfile)

module.exports = router
