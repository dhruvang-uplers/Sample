import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Reducer } from "../src/Redux/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { VerifyUser } from "./Redux/ActionCreator";

const middleware = [thunkMiddleware];
const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(...middleware)));
Store.dispatch(VerifyUser());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
