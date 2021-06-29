import React, {Component} from "react"
import { connect } from 'react-redux'
// import {getUser} from './actions/getUser'

class EndGame extends Component {

  handleClick = () => {
    this.props.newGame(false)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="endGame">
        {this.props.score !== null ? this.props.score.time : null} Seconds
          <h2>Great work Master Jedi!</h2>
          <button className="btn btn-primary" onClick={this.handleClick}>New Game</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {score: state.score}
}

export default connect(mapStateToProps)(EndGame)
