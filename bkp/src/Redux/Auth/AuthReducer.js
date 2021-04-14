import * as actions from "./actionTypes";
import { auth } from "../../firebase";

// const initialState = JSON.parse(localStorage.getItem("Auth")) || {}

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {}
}

export default function AuthReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLoggingIn: true,
                loginError: false
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: action.user
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true
            };
        default:
            return state;
    }
}
//     if (action.type === actions.EMAIL_SIGNUP) {
//         const { email, password } = action.payload
//         const data = auth.createUserWithEmailAndPassword(email, password);
//     } else if (action.type === actions.LOGIN) {

//     } else if (action.type === actions.EMAIL_SIGNIN) {
//         return state
//     } else if (action.type === actions.EMAIL_SIGNOUT) {
//         return state
//     } else if (action.type === actions.GOOGLE_SIGNIN) {
//         return state
//     } else {
//         return state
//     }
// }
