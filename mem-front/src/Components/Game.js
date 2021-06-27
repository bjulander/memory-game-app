import React, {Component} from "react"
import Cards from "./Cards"
import Timer from "./Timer"

class Game extends Component {

  render() {
    return (
      <>
        <Timer />
          <div className="game">
            <Cards endGame={this.props.endGame}/>
          </div>
      </>
    )
  }
}

export default Game
