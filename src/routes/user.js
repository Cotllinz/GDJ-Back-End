const router = require('express').Router()

const { reqruiterRegis, seekerRegis } = require('../controller/user')

router.post('/reqruiterregis', reqruiterRegis)
router.post('/seekerregis', seekerRegis)

module.exports = router
