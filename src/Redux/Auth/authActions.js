import { auth } from "../../firebase";
import * as actions from "./authTypes";


const requestLogin = () => {
    return {
        type: actions.LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: actions.LOGIN_SUCCESS,
        user
    };
};

const loginError = () => {
    return {
        type: actions.LOGIN_FAILURE
    };
};

const verifyRequest = () => {
    return {
        type: actions.VERIFY_REQUEST
    };
};

const verifySuccess = () => {
    return {
        type: actions.VERIFY_SUCCESS
    };
};

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    auth.signInWithEmailAndPassword(email, password).then(user => {
        dispatch(receiveLogin(user));
    }).catch(error => {
        dispatch(loginError());
    });
};

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    auth.onAuthStateChanged(user => {
        console.log(user);
        if (user !== null) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
    });
};