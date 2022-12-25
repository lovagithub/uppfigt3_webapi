require('dotenv').config()
const port = process.env.PORT || 9999
const initMongoDB = require('./server-mongodb')
const cors = require('cors')
const bodyParser = require('body-parser') 
const express = require('express')
const app = express()

// middleware  (system -> middleware ->  app)
// 'https://win22-webapi.azurewebsites.net/api/products'

app.use(cors())
app.use(express.urlencoded({ extended: false}))
app.use(bodyParser.json())

// routes/controllers

app.use('/api/products', require('./controllers/productsController'))


app.use('/api/users', require('./controllers/usersController'))

// start web api
initMongoDB()
app.listen(port, ()  => console.log(`Web Api is runing on http://lokalhost:${port}`))
