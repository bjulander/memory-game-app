import React, { Component } from "react"
import addScore from '../actions/addScore'
import {connect} from 'react-redux'
import fetchScores from '../actions/fetchScores'

class Timer extends Component {

  constructor() {
    super()
      this.timer = React.createRef()
      this.state = {time: 0, color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    }
  }

  componentDidMount() {
    this.interval = setInterval(
      this.clockTick,
      1 * 1000
    )
  }

  componentWillUnmount() {
    let userId = this.props.user.id
    let score = this.state.time
    this.props.addScore(score, userId)
    clearInterval(this.interval)
    this.setState({time: 0})
    this.props.fetchScores()
    
  }

  render() {
    const {time, color} = this.state;
    return (
      <section className="timer" style={{ background: color }} ref={this.timer}>
        <h1>{time}</h1>
      </section>
    )
  }

  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }))
  }
}

function mapStateToProps(state){
  return {user: state.user}
}

export default connect(mapStateToProps, {addScore, fetchScores})(Timer)
