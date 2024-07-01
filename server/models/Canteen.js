const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const menuItemSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: ()=>uuidv4().replace(/\-/g, "")
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    avg_prep_time: {
        type: Date,
    }
})

const schema = new mongoose.Schema({

    _id:{
        type: String,
        default: ()=>uuidv4().replace(/\-/g, "")
    },

    name:{
        type: String,
        required: true
    },

    location:{
        type: String,
        required: true,
    },

    manager:{
        type: Object,
        required: true,
        name:{
            type: String,
        },
        phnno:{
            type: Number
        }
    },
    menu: [menuItemSchema]
})

schema.statics.getCanteens = async function(){
    try{
        const canteens = await this.find()
        return canteens
    }catch(err){
        throw err
    }
}

schema.statics.getCanteenInfo = async function(id){
    try {
        const canteen = await this.findOne({ _id: id})
        return canteen
    } catch (err) {
        throw err
    }
}

schema.statics.createCanteen = async function(name, location, manager) {
    try{
        const canteen = await this.create({name, location, manager})
        return canteen
    }catch(err){
        throw err
    }
}

schema.statics.updateMenu = async function(id, menu){
    try{
        console.log(id, menu)
        const result = await this.updateOne(
            {_id: id},
            {menu: menu}
        )
        return result
    }catch(err){
        throw err
    }
}

module.exports = mongoose.model("Canteen", schema)