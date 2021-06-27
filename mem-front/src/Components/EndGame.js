import React, {Component} from "react"
import { connect } from 'react-redux'

class EndGame extends Component {

  handleClick = () => {
    this.props.newGame(false)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="endGame">
          <button className="btn btn-primary" onClick={this.handleClick}>
            Go Again
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {scores: state.scores}
}

export default connect(mapStateToProps)(EndGame)
