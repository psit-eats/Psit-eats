// library requires
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express')

// custom requires
const { apiHandler } = require('./handlers')

// constants
const PORT = process.env.PORT || 3000
const app = express()

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

// routes
app.use('/v1', apiHandler)

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}...`))