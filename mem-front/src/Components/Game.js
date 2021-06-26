import React from "react";
import Cards from "./Cards";

class Game extends React.Component {
  
  render() {
    return (
      <div className="game">
        <Cards endGame={this.props.endGame} />
      </div>
    );
  }
}

export default Game;
