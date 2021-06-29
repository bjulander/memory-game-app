import React, {Component} from 'react'
import {connect} from 'react-redux'
import Scores from './Scores'
import fetchScores from '../actions/fetchScores'

class Scoreboard extends Component {

    componentDidMount(){
        this.props.fetchScores()
    }

    render() {
        let allScores = this.props.scores
        let scr = allScores.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
        return (
            <>
                {this.props.scores.length > 0 ? <Scores scores={scr} /> : <h5>Loading scores come back later</h5>}
            </>
        )
    }
}

function mapStateToProps(state){
    return {scores: state.scores}
}
  
export default connect(mapStateToProps, {fetchScores})(Scoreboard)
  