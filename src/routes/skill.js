const router = require('express').Router()
const { addSkill, getSkill } = require('../controller/skill')

router.post('/add', addSkill)
router.get('/:id', getSkill)

module.exports = router
