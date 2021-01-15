const router = require('express').Router()
const user = require('./routes/user')
const hire = require('./routes/hire')
const company = require('./routes/companyProfile')
const skill = require('./routes/skill')

router.use('/hire', hire)
router.use('/user', user)
router.use('/company', company)
router.use('/skill', skill)

module.exports = router
