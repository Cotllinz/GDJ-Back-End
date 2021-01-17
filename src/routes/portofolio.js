const router = require('express').Router()
const { authorization, isSeeker } = require('../middleware/auth')
const {
  addPortofolio,
  editPortofolio,
  getPortofolio,
  deletePortofolio
} = require('../controller/portofolio')
const { uploadFilter, updateFilter } = require('../middleware/multerPortofolio')

router.get('/:id', authorization, getPortofolio)
router.post('/', authorization, isSeeker, uploadFilter, addPortofolio)
router.patch('/:id', authorization, isSeeker, updateFilter, editPortofolio)
router.delete('/delete/', authorization, isSeeker, deletePortofolio)

module.exports = router
