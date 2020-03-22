import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Micheal } from './micheal/micheal'
import { socket, onReceiveMessage } from '../utils/socket/socket'

const App = ({ test }) => {
  useEffect(() => {
    // socket.on('connected', data => onReceiveMessage(data))
  }, [])

  return (
    <div>
      <Micheal />
    </div>
  )
}

export default compose(
  connect(
    ({ test: { test } }) => ({
      test,
    }),
    {},
  ),
)(App)
