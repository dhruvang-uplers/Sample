import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { combineReducers, createStore } from 'redux';
 import Reducer from "../src/Redux/Reducer";


const rootReducer = combineReducers({
    Reducer
})

const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
   
    <Provider store={Store}>
      <App />
      </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);