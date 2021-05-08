import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk"
import AuthReducer from "./Auth/AuthReducer";
import { verifyAuth } from "./Auth/authActions";

const rootReducer = combineReducers({
    AuthReducer
})

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        // window.devToolsExtension && window.devToolsExtension()
    )
);
store.dispatch(verifyAuth());

export default store;