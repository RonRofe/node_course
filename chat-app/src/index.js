const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', 'Welcome to the chat-app website!')
    socket.broadcast.emit('message', 'A new user has joined!')

    socket.on('sendMessage', (message, callback) => {
        io.emit('message', message)
        callback('Delivered')
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!')
    })

    socket.on('sendLocation', coords => {
        socket.broadcast.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})