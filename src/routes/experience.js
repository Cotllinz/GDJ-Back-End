const router = require('express').Router()
const { authorization, isSeeker } = require('../middleware/auth')
const {
  getExperience,
  addExperience,
  editExperience,
  deleteExperience
} = require('../controller/experience')

router.get('/:id', authorization, isSeeker, getExperience)
router.post('/', authorization, isSeeker, addExperience)
router.patch('/edit', authorization, isSeeker, editExperience)
router.delete('/delete/', authorization, isSeeker, deleteExperience)

module.exports = router
