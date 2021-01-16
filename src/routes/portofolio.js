const router = require('express').Router()
const { addPortofolio } = require('../controller/portofolio')
const uploadImg = require('../middleware/multerPortofolio')

router.post('/', uploadImg, addPortofolio)

module.exports = router
