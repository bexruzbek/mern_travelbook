const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
require('dotenv').config()

//Connect to database
connectDB()

const app = express()

//Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/api/travel', require('./routes/travelRoutes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server listening on port: ${PORT}`))