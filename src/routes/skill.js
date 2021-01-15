const router = require('express').Router()
const { addSkill, getSkill, deleteSkill } = require('../controller/skill')

router.post('/add', addSkill)
router.get('/:id', getSkill)
router.delete('/:id', deleteSkill)

module.exports = router
