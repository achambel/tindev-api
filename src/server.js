const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express()

const dbUri = 'mongodb+srv://demoproject:demoproject@cluster0-zvbcm.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(dbUri, {useNewUrlParser: true})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)