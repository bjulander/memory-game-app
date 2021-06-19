export default function scoresReducer(state = {scores: []}, action) {
      switch (action.type) {
        case "ADD_SCORE": 
          return {scores: [...state.scores, action.payload]}
        case "FETCH_SCORES":
          return {scores: action.payload}
        default:
          return state
    }
}


   // case "ADD_ITEM":
        //   const updatedList = state.lists.find(score => score.id === action.payload.scoreId) // first find list that todo is associated with
        //   updatedList.todos = [...updatedList.todos, action.payload] // replace todos property on the list
    // case "DELETE_SCORE":
        //   return {scores: state.scores.filter(score => score.id !== action.payload)}
        

