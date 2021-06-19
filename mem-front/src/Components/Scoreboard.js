import React, {Component} from 'react'
import {connect} from 'react-redux'
import Scores from './Scores'

class Scoreboard extends Component {

    render() {
        return (
            <>
                <div>
                    {this.props.scores.length > 0 ? <Scores games={this.props.scores} /> : <h2 style={{textAlign: "center"}}>Loading Scores...</h2>}
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    debugger
    return {scores: state.scores}
}
  
export default connect(mapStateToProps)(Scoreboard)
  