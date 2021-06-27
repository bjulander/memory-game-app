export default function addScore(newScore, userId) {
    return function(dispatch) {
        let game = {
            score:{
                time: newScore,
                user_id: userId
            }
        }
      fetch("http://localhost:3001/scores", {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify(game)
      }).then(r => r.json())
      .then(newGame => dispatch({type: "ADD_GAME", payload: newGame}))
    }
}
