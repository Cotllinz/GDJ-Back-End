const router = require('express').Router()

const { getExperience, addExperience, editExperience } = require('../controller/experience')

router.get('/:id', getExperience)
router.post('/', addExperience)
router.patch('/edit', editExperience)

module.exports = router
