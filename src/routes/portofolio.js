const router = require('express').Router()
const { addPortofolio, editPortofolio, getPortofolio, deletePortofolio } = require('../controller/portofolio')
const { uploadFilter, updateFilter } = require('../middleware/multerPortofolio')

router.get('/:id', getPortofolio)
router.post('/', uploadFilter, addPortofolio)
router.patch('/:id', updateFilter, editPortofolio)
router.delete('/delete/', deletePortofolio)

module.exports = router
