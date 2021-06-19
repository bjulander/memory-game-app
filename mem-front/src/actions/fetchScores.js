export default function fetchScores() {
    return (dispatch) => {
      fetch("http://localhost:3001/scores")
      .then(function(response) {
        return response.json()
      })
      .then((scoresArray) => {
        dispatch({type: "FETCH_SCORES", payload: scoresArray})
      })
    }
  }
  