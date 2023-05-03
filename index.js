const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const colors = require('colors')

const quizeRoutes = require('./routes/quizeRoutes')
const DB = require('./config/conntingDB')
const userRoutes = require('./routes/userRoutes')

const port = process.env.PORT

const app = express()
DB()
app.use(cors())
app.use(cors({ origin: "*" }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/admin', quizeRoutes)
app.use('/user', userRoutes)

// app.use('/data', dataRoutes)


app.listen(port, () => {
    console.log(`connting server ${port}`);
})