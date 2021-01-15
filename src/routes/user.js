const router = require('express').Router()
const uploadFiles = require('../middleware/multerFileHire')

const { register, login, hire } = require('../controller/user')

router.post('/register', register)
router.post('/login', login)
router.post('/hire', uploadFiles, hire)

module.exports = router
