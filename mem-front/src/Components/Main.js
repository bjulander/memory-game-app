import React, {Component} from 'react'
import Login from "./Login"
import Game from "./Game"
import Navbar from "./Navbar"
import EndGame from "./EndGame"
import Scoreboard from "./Scoreboard"
import Instructions from './Instructions.js'
import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'

class Main extends Component {

    render(){
        return (
            <>
                <Switch>
                    <Route exact path="/">
                        <Instructions/>
                        <Link to="/game">
                            <button type="button">New Game</button>
                        </Link>
                    </Route>
                    <Route path="/game">
                        </Route>
                    <Route exact path="/scoreboard">
                        <Scoreboard />
                    </Route>
                    <Route exact path="/about">
                        About Comp
                    </Route>
                </Switch>
            </>
        )
    }
}


export default Main