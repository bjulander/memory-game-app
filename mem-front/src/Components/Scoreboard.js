import React, {Component} from 'react'
import {connect} from 'react-redux'
import Scores from './Scores'

class Scoreboard extends Component {

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
  
export default connect(mapStateToProps)(Scoreboard)
  