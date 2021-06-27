import React, {Component} from 'react'
import GameContainer from "./GameContainer"
import Scoreboard from "./Scoreboard"
import Instructions from './Instructions.js'
import About from './About.js'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import fetchScores from '../actions/fetchScores'
import {withRouter} from 'react-router-dom'
import Login from "./Login"

class Main extends Component {

    state = { 
        showLogin: true,
        newUser: true
    }
    
    handleLogin(boolean){
        this.setState({ showLogin: boolean, newUser: boolean})
    }

    render(){
        // const {showLogin} = this.state
        return (
            <>
                <Switch>
                    <Route exact path="/">
                        {this.state.showLogin ? <Login newUser={this.handleLogin.bind(this)} /> : <Instructions/>}
                    </Route>
                    <Route path="/game">
                    {this.state.showLogin ? <Login newUser={this.handleLogin.bind(this)} /> : <GameContainer/>} 
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