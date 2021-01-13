const router = require('express').Router()

const { reqruiterRegis } = require('../controller/user')

router.post('/regisreqruiter', reqruiterRegis)

module.exports = router
