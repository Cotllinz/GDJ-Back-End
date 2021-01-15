const router = require('express').Router()
const { addSkill } = require('../controller/skill')

router.post('/add', addSkill)

module.exports = router
