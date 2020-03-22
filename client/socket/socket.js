import socketIOClient from 'socket.io-client'
import coronaVirus from '../assets/audio/coronaVirus.wav'
export const socket = socketIOClient(process.env.url)

export const onReceiveMessage = data => console.log(data)

export const sendMessage = data => socket.emit('message', { message: data })

const playAudio = () => {
  const audio = new Audio(coronaVirus)
  audio.play()
}

socket.on('broadcast', () => {
  playAudio()
})
