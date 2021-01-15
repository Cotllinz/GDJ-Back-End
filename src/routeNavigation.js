const router = require('express').Router()
const user = require('./routes/user')
const hire = require('./routes/hire')
const experience = require('./routes/experience')
router.use('/hire', hire)
router.use('/user', user)
router.use('/experiences', experience)
module.exports = router
