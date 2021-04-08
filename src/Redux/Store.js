import { combineReducers, createStore } from 'redux'
import Reducer from "./Reducer";
import AuthReducer from "./Auth/AuthReducer";

const rootReducer = combineReducers({
    Reducer,
    AuthReducer
})

const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;

