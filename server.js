const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const { processController } = require('./src/controllers/process.controller')

const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.use('/process', processController)

mongoose.connect('mongodb+srv://Bewgle_Admin:w3mhm580IxnpUJiE@bewgle-assessment.x8ynk.mongodb.net/process?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    app.listen(3000, () => {
        console.log('Listening at 3000');
    })
})

