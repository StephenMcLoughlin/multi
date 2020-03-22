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
  socket.emit('connected', 'connected')

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function() {
    console.log('A user disconnected')
  })

  socket.on('message', ({ message }) => {
    switch (message) {
      case 'coronaVirus':
        return socket.broadcast.emit('messageFromServer', {
          message: 'coronaVirus',
        })
      default:
        return socket.broadcast.emit('messageFromServer', {
          message,
        })
    }
  })
})

http.listen(PORT, function() {
  console.log('listening on ', PORT)
})
