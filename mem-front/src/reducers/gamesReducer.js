export default function reducer(state = {user: null, score: null, HighScores:[]}, action) {
  switch (action.type) {
    case "ADD_USER": 
      return {...state, user: {...action.payload}}
    case "FETCH_SCORES":
      return {...state, HighScores: [...action.payload]}
    case "ADD_GAME":
      return  {...state, score: {...action.payload.score}}
    default:
      return {...state}
  }
}