const router = require('express').Router()
const {
  addSkill,
  getSkill,
  deleteSkill,
  editSkill
} = require('../controller/skill')

router.post('/add', addSkill)
router.get('/:id', getSkill)
router.delete('/:id', deleteSkill)
router.patch('/:id', editSkill)

module.exports = router
