const router = require('express').Router()
const user = require('./routes/user')
const hire = require('./routes/hire')
const company = require('./routes/companyProfile')
const skill = require('./routes/skill')
const experience = require('./routes/experience')

router.use('/hire', hire)
router.use('/user', user)
router.use('/company', company)
router.use('/skill', skill)
router.use('/experiences', experience)

module.exports = router
