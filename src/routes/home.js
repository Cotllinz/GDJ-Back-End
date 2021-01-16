const router = require('express').Router()
const { searchSort } = require('../controller/home')

router.get('/', searchSort)

module.exports = router
