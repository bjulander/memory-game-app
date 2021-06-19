import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
// import fetchScores from '../actions/fetchScores'

class Scoreboard extends Component {

    // componentDidMount() {
    //     this.props.fetchScores()
    // }

    render() {
        return (
            <>
                <ul>
                    {this.props.scores && this.props.scores.map((score, i) => <li key={score.id}>{score.clicks}</li> )}
                </ul>
            </>
        )
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps")
    return {scores: state.scores}
  }

export default connect(mapStateToProps)(Scoreboard)