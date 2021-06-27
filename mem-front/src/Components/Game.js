import React, {Component} from "react"
import Cards from "./Cards"

class Game extends Component {

  render() {
    // console.log(this.state.clicks)
    return (
      <div className="game">
        <Cards endGame={this.props.endGame}/>
      </div>
    )
  }
}

export default Game
