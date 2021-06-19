import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, compose(applyMiddleware(thunk), composeWithDevTools()))


ReactDOM.render(
  <Router >
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById("root")
)