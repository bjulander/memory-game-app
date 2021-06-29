import React, {Component} from "react"
import { connect } from 'react-redux'
// import {getUser} from './actions/getUser'

class EndGame extends Component {

  handleClick = () => {
    this.props.newGame(false)
  }

  render() {
    debugger
    return (
      <div className="wrapper">
        <div className="endGame">
          <h2>Great work Master Jedi!</h2>
          <button className="btn btn-primary" onClick={this.handleClick}>New Game</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  debugger
  return {scores: state.scores, user: state.user}
}

export default connect(mapStateToProps)(EndGame)
