const router = require('express').Router()
const user = require('./routes/user')
const hire = require('./routes/hire')
router.use('/hire', hire)
router.use('/user', user)
module.exports = router
