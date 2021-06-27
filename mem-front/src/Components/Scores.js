import React from 'react'
import Score from './Score'



export default function Scores(props) {
    return (
        <>
            <h1>Scores</h1>
            {props.scores && props.scores.map((score, i) => <Score key={score.id} score={score} i={i} />)}
        </>
    )
}