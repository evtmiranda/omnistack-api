import express from 'express';
import path from 'path';
import cors from 'cors';
import { port } from './config/constants';
import mongoose from 'mongoose'
import { authenticate } from './middlewares/authentication'
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://localhost:27017/omnistack-api', {
    useNewUrlParser: true
})

app.use((req, _res, next) => {
    req.io = io;
    next()
})

app.use((req, res, next) => authenticate(req, res, next))

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use('/api', require('./routes').default)

server.listen(port, () => { console.log(`The server is running on the port ${port}`) })

