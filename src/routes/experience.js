const router = require('express').Router()

const { getExperience, addExperience, editExperience, deleteExperience } = require('../controller/experience')

router.get('/:id', getExperience)
router.post('/', addExperience)
router.patch('/edit', editExperience)
router.delete('/delete/', deleteExperience)

module.exports = router
