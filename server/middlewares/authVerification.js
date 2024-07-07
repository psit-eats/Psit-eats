const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    try {
        const authToken = req.headers['authorization']?.split(' ')[1]
        console.log(req.headers)
        if (authToken == null) {
            console.log('token is null')
            return res.sendStatus(403)
        } else {
            jwt.verify(authToken, process.env.JWT_SECRET, (err, user) => {
                console.log('token payload:', user)
                if (err) {
                    console.log('error in authorization token verification')
                    res.sendStatus(403)
                } else {
                    req.user = user
                    next()
                }
            })
        }
    } catch (err) {
        console.log('error in auth middleware')
        res.sendStatus(500)
    }
}