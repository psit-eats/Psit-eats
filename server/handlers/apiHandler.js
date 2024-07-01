const router = require('express').Router()
const {api} = require('../controllers')

// Implement a custom middleware that authorizes certain api routes
// such as creating a canteen requires admin privileges but geting
// canteen info doesn't.
router
    .get('/canteens', api.getCanteens)
    .get('/canteens/:canteenID', api.getCanteenInfo)
    .post('/canteens', api.createCanteen)
    .post('/canteens/:canteenID/menu', api.updateMenu)

module.exports = router