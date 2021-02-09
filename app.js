const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routeNav = require('./src/routeNavigation.js')
const cors = require('cors')
require('dotenv').config()
const socket = require('socket.io')

const app = express()
app.use(morgan('dev'))
app.use(express.static('upload'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  response.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.use('/', routeNav)

app.get('*', (request, response) => {
  response.status(404).send('Path not found')
})

const http = require('http')
const server = http.createServer(app)
const io = socket(server, {
  cors: {
    origin: '*'
  }
})
io.on('connection', (socket) => {
  console.log('Socket.io Connect !')
  socket.on('globalMessage', (data) => {
    console.log('globalMessage ')
    console.log(data)
    io.emit('chatMessage', data)
  })
  socket.on('privateMessage', (data) => {
    console.log('privateMessage ')
    console.log(data)

    socket.emit('chatMessage', data)
  })
  socket.on('broadcastMessage', (data) => {
    console.log('broadcastMessage ')
    console.log(data)

    socket.broadcast.emit('chatMessage', data)
  })
  socket.on('joinRoom', (data) => {
    console.log(data)
    socket.join(data.room)
  })
  socket.on('changeRoom', (data) => {
    console.log(data)
    socket.leave(data.oldRoom)
    socket.join(data.room)
  })
  socket.on('roomMessage', (data) => {
    console.log('roomMessage ')
    console.log(data)
    io.to(data.room).emit('chatMessage', data)
  })
  socket.on('typing', (data) => {
    console.log(data)
    socket.broadcast.to(data.room).emit('typingMessage', data)
  })
})

server.listen(process.env.PORT, () => {
  console.log(`Express app is listening on port ${process.env.PORT}`)
})
