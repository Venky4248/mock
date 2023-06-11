import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import MeetContext from '../../Context/MeetContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {list: topicsList[0].id, display: false, redirectToHome: false}

  render() {
    const {display, redirectToHome} = this.state

    return (
      <MeetContext.Consumer>
        {value => {
          const {changeName, name, Text, Topic, changeTopic} = value
          const changeUser = event => {
            changeName(event.target.value)
          }

          const changeOption = event => {
            changeTopic(event.target.value)
          }

          const submitted = event => {
            event.preventDefault()

            const {history} = this.props

            if (Text.length === 0) {
              this.setState({display: true})
            }
          }

          if (!display) {
            return <Redirect to="/" />
          }

          console.log(Text)
          return (
            <div>
              <Header />
              <div className="register-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                  className="register-pic"
                />
                <div className="join-container">
                  <h1 className="join">Let us join</h1>
                  <label htmlFor="name" className="name">
                    NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input"
                    placeholder="Your name"
                    onChange={changeUser}
                  />
                  <label htmlFor="topic" className="name">
                    TOPICS
                  </label>
                  <div className="f-c">
                    <ul>
                      <li className="list-style">
                        <select
                          id="topic"
                          value={Topic}
                          className="drop"
                          onChange={changeOption}
                        >
                          {topicsList.map(each => (
                            <option key={each.id} value={each.id}>
                              {each.displayText}
                            </option>
                          ))}
                        </select>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="register-bt"
                    onClick={submitted}
                  >
                    Register Now
                  </button>

                  {display ? (
                    <p className="error">Please enter your name</p>
                  ) : null}
                </div>
              </div>
            </div>
          )
        }}
      </MeetContext.Consumer>
    )
  }
}
export default Register
