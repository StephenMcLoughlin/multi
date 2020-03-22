import React from 'react'
import michealD from '../../assets/images/michealD.png'
import { playAudio } from '../../utils/audio/audio'
import { Container, Image } from './micheal.style'
import { sendMessage } from '../../utils/socket/socket'

export const Micheal = () => (
  <Container>
    <Image
      src={michealD}
      onClick={() => {
        sendMessage('coronaVirus')
        playAudio()
      }}
    />
  </Container>
)
