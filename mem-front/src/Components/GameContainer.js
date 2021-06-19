// import Game from "./Game"
// import EndGame from "./EndGame"
import React, {Component} from 'react'

class GameContainer extends Component {

    constructor() {
        super()
        this.state = {newUser: true}
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({newUser: false})
        // const name = e.target[0].value
    }

    render(){
        return (
            <>
                {this.state.newUser ?
                    <div className="newUser">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" size="5"/>                            
                            <input type="submit" value="Start" />
                        </form>
                    </div>
                : null}
            </>
        )
    }
}


export default GameContainer