import React, {Component} from 'react'
import {connect} from 'react-redux'
import Scores from './Scores'
import fetchScores from '../actions/fetchScores'

class Scoreboard extends Component {

    componentDidMount(){
        debugger
        this.props.fetchScores()
    }

    render() {
        return (
            <>
                <Scores scores={this.props.scores}/>
            </>
        )
    }
}

function mapStateToProps(state){
    return {scores: state.scores}
}
  
export default connect(mapStateToProps, {fetchScores})(Scoreboard)
  