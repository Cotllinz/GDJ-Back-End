const router = require('express').Router()
const { searchSort, getDataBySkillSorting } = require('../controller/home')

router.get('/', searchSort)
router.get('/getsortingskill', getDataBySkillSorting)
module.exports = router
