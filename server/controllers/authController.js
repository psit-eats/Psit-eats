const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

function generateToken(payload){
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 86400})
}

const controller = {
    register: async(req, res) => {
        try{
            const { name, userID, role, password } = req.body
            bcrypt.hash(password, 12, async(err, hash) => {
                try{
                    const result = await User.createUser({name: name, userID: userID, role: role, password: hash})
                    if(result){
                        res.status(201).json({ success: true })
                    }else{
                        res.status(500).json({ success: false, error: err })
                    }
                }catch(err){
                    res.status(500).json({ success: false, error: err })
                }
            })
        }catch(err){
            res.status(500).json({ success: false, error: err })
        }
    },
    login: async(req, res) => {
        try{
            const { userID, password } = req.body
            const user = await User.findOne({userID: userID})
            if(user){
                bcrypt.compare(password, user.password, (err, result) => {
                    if(err){
                        console.log('error in validating user password in login controller')
                    }
                    if(result){
                        const token = generateToken({name: user.name, userID: userID, role: user.role})
                        res.status(200).json(token)
                    }else{
                        res.sendStatus(403)
                    }

                })
            }else{
                res.sendStatus(404)
            }
        }catch(err){
            console.log(err)
            res.status(500).json({ success: false, error: err })
        }
    }
}

module.exports = controller