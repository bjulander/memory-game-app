import React, {Component} from 'react'
// import Login from "./Login"
import GameContainer from "./GameContainer"
// import EndGame from "./EndGame"
import Scoreboard from "./Scoreboard"
import Instructions from './Instructions.js'
import About from './About.js'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import fetchScores from '../actions/fetchScores'
import {withRouter} from 'react-router-dom'
import Login from "./Login"

class Main extends Component {

    constructor() {
        super()
        this.state = { 
            showLogin: true,
            newUser: true
        }
    }

    handleLogin(e){
        this.setState({ showLogin: false, newUser: false})
    }

    render(){
        return (
            <>
                <Switch>
                    <Route exact path="/">
                        {this.state.showLogin ? <Login newUser={this.handleLogin.bind(this)} /> : <Instructions/>}
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


export default withRouter(connect(null, {fetchScores})(Main))