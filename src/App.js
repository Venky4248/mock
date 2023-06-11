// App.js
import {Component} from 'react'
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import MeetContext from './Context/MeetContext'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Home from './components/Home'

class App extends Component {
  state = {
    Text: 'Welcome to Meetup',
    Topic: 'Please register for the topic',
    Topics: 'Arts and Culture',
    userName: '',
  }

  componentDidMount() {
    this.setState({Topic: 'Please register for the topic'})
  }

  changeTopic = val => {
    this.setState({Topics: val})
  }

  changeName = msg => {
    this.setState({Text: msg, userName: msg})
  }

  render() {
    const {Text, Topic, Topics, userName} = this.state

    return (
      <MeetContext.Provider
        value={{
          Text,
          Topic,
          Topics,
          name: userName,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetContext.Provider>
    )
  }
}

export default App
