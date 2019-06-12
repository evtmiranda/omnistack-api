const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const cors = require('cors')
const constants = require('./config/constants')

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://localhost:27017/omnistack-api', {
    useNewUrlParser: true
})

app.use((req, _res, next) => {
    req.io = io;
    next()
})

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use('/api', require('./routes'))

server.listen(constants.port)

