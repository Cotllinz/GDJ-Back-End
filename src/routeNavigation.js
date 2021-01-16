const router = require('express').Router()
const user = require('./routes/user')
const hire = require('./routes/hire')
const company = require('./routes/companyProfile')
const skill = require('./routes/skill')
const experience = require('./routes/experience')
const portofolio = require('./routes/portofolio')

router.use('/hire', hire)
router.use('/user', user)
router.use('/company', company)
router.use('/skill', skill)
router.use('/experiences', experience)
router.use('/portofolio', portofolio)

module.exports = router
