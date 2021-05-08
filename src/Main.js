import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import store from "./Redux/store";

export default function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
