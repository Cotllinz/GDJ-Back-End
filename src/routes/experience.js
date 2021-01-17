const router = require('express').Router()
const { authorization, isSeeker } = require('../middleware/auth')
const {
  getExperience,
  addExperience,
  editExperience,
  deleteExperience
} = require('../controller/experience')
const { getExperienceByIdRedis, clearRedis } = require('../middleware/redis')

router.get('/:id', authorization, getExperienceByIdRedis, getExperience)
router.post('/', authorization, isSeeker, clearRedis, addExperience)
router.patch('/edit', authorization, isSeeker, clearRedis, editExperience)
router.delete('/delete/', authorization, isSeeker, clearRedis, deleteExperience)

module.exports = router
