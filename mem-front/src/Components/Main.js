import React, {Component} from 'react'
// import Login from "./Login"
import GameContainer from "./GameContainer"
// import EndGame from "./EndGame"
import Scoreboard from "./Scoreboard"
import Instructions from './Instructions.js'
import About from './About.js'
import {Route, Switch} from 'react-router-dom'

class Main extends Component {

    render(){
        return (
            <>
                <Switch>
                    <Route exact path="/">
                        <Instructions/>
                    </Route>
                    <Route path="/game">
                        <GameContainer/>
                    </Route>
                    <Route exact path="/scoreboard">
                        <Scoreboard />
                   </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                </Switch>
            </>
        )
    }
}


export default Main