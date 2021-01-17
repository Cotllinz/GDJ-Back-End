const router = require('express').Router()
const { authorization, isSeeker } = require('../middleware/auth')

const {
  addSkill,
  getSkill,
  deleteSkill,
  editSkill
} = require('../controller/skill')

router.post('/add', authorization, isSeeker, addSkill)
router.get('/:id', authorization, isSeeker, getSkill)
router.delete('/:id', authorization, isSeeker, deleteSkill)
router.patch('/:id', authorization, isSeeker, editSkill)

module.exports = router
