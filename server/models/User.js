const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const schema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4().replace(/\-/g, "")
    },
    name: {
        type: String,
        required: [true, 'A name is required']
    },
    userID: {
        type: String,
        required: [true, 'A userID is required'],
        unique: true
    },
    role: {
        type: String,
        required: [true, 'A role is required']
    },
    password: {
        type: String,
        required: [true, 'A password is required']
    }
})

schema.statics.createUser = async function(params){
    try{
        const user = await this.create(params)
        return user
    }catch(err){
        throw err
    }
}

module.exports = new mongoose.model("User", schema)