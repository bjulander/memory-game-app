export default function reducer(state = {user: null, scores: []}, action) {
  switch (action.type) {
    case "ADD_USER": 
      return {...state, user: {...action.payload}}
    case "FETCH_SCORES":
      return {...state, scores: [...action.payload]}
    case "ADD_GAME":
      return  {...state, scores: action.payload.score}
    default:
      return {...state}
  }
}