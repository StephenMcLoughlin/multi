const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 8000

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'))
})

app.listen(PORT, () => console.log('listening on port', PORT))
