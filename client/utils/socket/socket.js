import socketIOClient from 'socket.io-client'
import { playAudio } from '../audio/audio'

export const socket = socketIOClient(process.env.url)

export const onReceiveMessage = data => console.log(data)

export const sendMessage = data => socket.emit('message', { message: data })

socket.on('connected', data => onReceiveMessage(data))

socket.on('messageFromServer', ({ message }) => {
  switch (message) {
    case 'coronaVirus':
      return playAudio()
    default:
      return onReceiveMessage(message)
  }
})
