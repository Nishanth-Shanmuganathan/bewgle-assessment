const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const { processController } = require('./src/controllers/process.controller')

const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.use('/process', processController)

app.listen(3000, () => {
    console.log('Listening at 3000');
})