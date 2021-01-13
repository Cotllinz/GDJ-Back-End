const router = require('express').Router()

const { reqruiterRegis, seekerRegis, login } = require('../controller/user')

router.post('/reqruiterregis', reqruiterRegis)
router.post('/seekerregis', seekerRegis)
router.post('/login', login)

module.exports = router
