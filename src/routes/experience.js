const router = require('express').Router()

const { addExperience, editExperience } = require('../controller/experience')

router.post('/', addExperience)
router.patch('/edit', editExperience)

module.exports = router
