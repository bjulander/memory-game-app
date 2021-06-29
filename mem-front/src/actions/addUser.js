export default function addUser(user) {
  return function(dispatch) {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({user: user})})
    .then(r => r.json())
    .then(user => dispatch({type: "ADD_USER", payload: user}))
  }
}