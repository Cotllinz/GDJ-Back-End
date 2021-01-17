const router = require('express').Router()
const {
  searchSort,
  getDataBySkillSorting,
  getDatabyLimit
} = require('../controller/home')

router.get('/', searchSort)
router.get('/getsortingskill', getDataBySkillSorting)
router.get('/limit', getDatabyLimit)
module.exports = router
