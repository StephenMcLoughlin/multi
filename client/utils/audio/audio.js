import coronaVirus from '../../assets/audio/coronaVirus.wav'

export const playAudio = () => {
  const audio = new Audio(coronaVirus)
  audio.play()
}
