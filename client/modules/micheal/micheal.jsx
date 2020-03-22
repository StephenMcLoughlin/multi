import React from 'react'
import michealD from '../../assets/images/michealD.png'
import coronaVirus from '../../assets/audio/coronaVirus.wav'
import { Container, Image } from './micheal.style'

const playAudio = () => {
  const audio = new Audio(coronaVirus)
  audio.play()
}

export const Micheal = () => (
  <Container>
    <Image src={michealD} onClick={() => playAudio()} />
  </Container>
)
