const router = require('express').Router()
const auth = require('../controllers/authController')

router
    .post('/signup', auth.register)
    .post('/login', auth.login)

module.exports = router