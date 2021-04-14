import * as actions from "./authTypes";

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: true,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {}
}

export default function AuthReducer(state = initialState, action) {

    switch (action.type) {
        case actions.LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: action.user
            };
        case actions.LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true
            };
        case actions.VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            };
        case actions.VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false
            };
        default:
            return state;
    }
}