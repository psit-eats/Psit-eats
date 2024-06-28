const mongoose = require('mongoose')

const db = async() => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        // await mongoose.connection.db.admin().command({ ping: 1})
        mongoose.connection.on('disconnected', () => {
            console.log('database disconnected')
        })
        console.log('Database connected successfully')
    }catch(err){
        console.log('Error while connecting database')
        console.error(err)
    }
}

module.exports = db