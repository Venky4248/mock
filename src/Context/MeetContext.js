// MeetContext.js
import React from 'react'

const MeetContext = React.createContext({
  Text: 'Welcome to Meetup',
  Topic: 'Please register for the topic',
  name: '',
  Topics: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
})

export default MeetContext
