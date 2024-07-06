const router = require('express').Router()
const { api } = require('../controllers')
const rbac = require('../middlewares/rbacMiddleware')

// Implement a custom middleware that authorizes certain api routes
// such as creating a canteen requires admin privileges but geting
// canteen info doesn't.
router
    .get('/canteens', rbac.checkPermission('read_canteen'), api.getCanteens)
    .get('/canteens/:canteenID', rbac.checkPermission('read_canteen'), api.getCanteenInfo)
    .post('/canteens', rbac.checkPermission('create_canteen'), api.createCanteen)
    .post('/canteens/:canteenID/menu', rbac.checkPermission('update_canteen'), api.updateMenu)
    .delete('/canteens/:canteenID', rbac.checkPermission('delete_canteen'), api.deleteCanteen)

module.exports = router