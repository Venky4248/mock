// Home.js
import {Component} from 'react'
import MeetContext from '../../Context/MeetContext'
import Header from '../Header'
import './index.css'

class Home extends Component {
  clicked = event => {
    event.preventDefault()
    const {history} = this.props
    history.replace('/register')
  }

  render() {
    return (
      <MeetContext.Consumer>
        {value => {
          const {Text, Topic} = value

          return (
            <div>
              <Header />
              <form className="bg-container" onSubmit={this.clicked}>
                <h1 className="head">{Text}</h1>
                <p className="para">{Topic}</p>
                <button type="submit" className="bt">
                  Register
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="meetup-pic"
                />
              </form>
            </div>
          )
        }}
      </MeetContext.Consumer>
    )
  }
}

export default Home
