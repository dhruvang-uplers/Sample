import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk"
import Reducer from "./Reducer";
import AuthReducer from "./Auth/AuthReducer";

const rootReducer = combineReducers({
    Reducer,
    AuthReducer
})

const Store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension && window.devToolsExtension()
    )
);

export default Store;
