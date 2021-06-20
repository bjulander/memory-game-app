import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import gameReducer from './reducers/scoresReducer'

const initialState = {user: null, scores: []}
const store = createStore(gameReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Router >
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById("root")
)