const express = require('express')
const app = express()
const path = require('path')
var http = require('http').Server(app)
var io = require('socket.io')(http)

const PORT = process.env.PORT || 8000

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'))
})

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
  console.log('A user connected')
  socket.emit('Test', { test: 'test' })

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function() {
    console.log('A user disconnected')
  })

  socket.on('message', data => {
    console.log(data)
    socket.broadcast.emit('broadcast', 'hello friends!')
  })
})

http.listen(PORT, function() {
  console.log('listening on ', PORT)
})
