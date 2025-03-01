// library requires
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express')

// custom requires
const { apiHandler, authHandler } = require('./handlers')
const database = require('./utility/database-config')
const authorize = require('./middlewares/authVerification')

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
app.use('/v1', authorize, apiHandler)
app.use('/auth', authHandler)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))