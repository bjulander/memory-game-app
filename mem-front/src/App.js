import React from "react";
import Main from "./Components/Main"
import NavBar from "./Components/NavBar"
import "./style/App.css"

function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <Main />
      </div>
    </>
  )
}

export default App;