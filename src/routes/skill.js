const router = require('express').Router()
const { authorization, isSeeker } = require('../middleware/auth')
const { getSkillByIdRedis, clearRedis } = require('../middleware/redis')
const {
  addSkill,
  getSkill,
  deleteSkill,
  editSkill
} = require('../controller/skill')

router.post('/add', authorization, isSeeker, clearRedis, addSkill)
router.get(
  '/:id',
  authorization,
  isSeeker,
  getSkillByIdRedis,
  clearRedis,
  getSkill
)
router.delete('/:id', authorization, isSeeker, clearRedis, deleteSkill)
router.patch('/:id', authorization, isSeeker, clearRedis, editSkill)

module.exports = router
