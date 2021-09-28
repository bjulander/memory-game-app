import React, {Component} from 'react'
import GameContainer from "./GameContainer"
import Scoreboard from "./Scoreboard"
import Instructions from './Instructions.js'
import About from './About.js'
import {Route, Switch} from 'react-router-dom'
import Login from "./Login"
import { connect } from 'react-redux'


class Main extends Component {

    state = { 
        showLogin: true,
        newUser: true
    }
    
    handleLogin(boolean){
        this.setState({ showLogin: boolean, newUser: boolean})
    }

    render(){
        return (
            <>
                {this.state.showLogin || this.props.user === null ? 
                    <Login newUser={this.handleLogin.bind(this)} /> 
                    : <Switch>
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
                </Switch>}
            </>
        )
    }
}

function mapStateToProps(state){
    return {user: state.user}
}


export default connect(mapStateToProps)(Main)