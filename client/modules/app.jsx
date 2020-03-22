import React, { useEffect } from 'react'
import { Micheal } from './micheal/micheal'
import socketIOClient from 'socket.io-client'

const App = () => {
  useEffect(() => {
    const socket = socketIOClient(process.env.url)
    socket.on('Test', data => console.log(data))
  }, [])

  return (
    <div>
      <Micheal />
    </div>
  )
}

export default App
