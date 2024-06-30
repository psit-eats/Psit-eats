const router = require('express').Router()
const {api} = require('../controllers')

router.get('/canteens', api.canteenInfo)

module.exports = router