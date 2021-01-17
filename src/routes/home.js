const router = require('express').Router()
const { authorization, isRecruiter } = require('../middleware/auth')
const {
  searchSort,
  getDataBySkillSorting,
  getDatabyLimit
} = require('../controller/home')

router.get('/', authorization, isRecruiter, searchSort)
router.get(
  '/getsortingskill',
  authorization,
  isRecruiter,
  getDataBySkillSorting
)
router.get('/limit', authorization, isRecruiter, getDatabyLimit)

module.exports = router
