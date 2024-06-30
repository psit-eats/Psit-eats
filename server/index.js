// library requires
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express')

// custom requires
const { apiHandler } = require('./handlers')
const database = require('./utility/database-config')

// constants
const PORT = process.env.PORT || 3000
const app = express()

database()

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

// routes
app.use('/v1', apiHandler)

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}...`))