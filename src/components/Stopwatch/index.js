// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeInMin: 0, timeInSec: 0}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  startWatch = () => {
    this.intervalId = setInterval(this.tick, 1000)
    this.setState({isTimerRunning: true})
  }

  tick = () => {
    const {timeInSec} = this.state
    if (timeInSec === 59) {
      this.setState(prevState => ({
        timeInMin: prevState.timeInMin + 1,
        timeInSec: 0,
      }))
    } else {
      this.setState(prevState => ({timeInSec: prevState.timeInSec + 1}))
    }
  }

  resetWatch = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false, timeInMin: 0, timeInSec: 0})
  }

  stopWatch = () => {
    const {isTimerRunning} = this.state

    if (isTimerRunning) {
      clearInterval(this.intervalId)
    }
  }

  render() {
    const {timeInMin, timeInSec} = this.state

    const getMin = timeInMin <= 9 ? `0${timeInMin}` : `${timeInMin}`

    const getSec = timeInSec <= 9 ? `0${timeInSec}` : `${timeInSec}`

    return (
      <div className="bg-container">
        <div className="detailed-container">
          <h1 className="main-heading">StopWatch</h1>

          <div className="stop-watch-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <span className="title">Timer</span>
            </div>

            <h1 className="timer">
              {getMin}:{getSec}
            </h1>
            <div className="btn-card">
              <button
                className="btn start-btn"
                onClick={this.startWatch}
                type="button"
              >
                Start
              </button>
              <button
                className="btn stop-btn"
                onClick={this.stopWatch}
                type="button"
              >
                Stop
              </button>
              <button
                className="btn reset-btn"
                onClick={this.resetWatch}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
