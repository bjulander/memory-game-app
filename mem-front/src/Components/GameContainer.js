import Game from "./Game"
import EndGame from "./EndGame"
import React, {Component} from 'react'

class GameContainer extends Component {

    state = {
        showEndGame: false

    }

    handleEndGame(boolean){
        if (boolean){
            this.setState({ showEndGame: boolean})
        } else {
            this.setState({showEndGame: boolean})
        }
    }

    render(){
        return (
            <>
                {this.state.showEndGame ? <EndGame newGame={this.handleEndGame.bind(this)}/> : <Game endGame={this.handleEndGame.bind(this)}/>}
            </>
        )
    }
}


export default GameContainer