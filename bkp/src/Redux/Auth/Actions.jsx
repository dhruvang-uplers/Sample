// import { auth } from "../../firebase";

// export const emailSignup = (email, password) => ({
//     type: "EMAIL_SIGNUP",
//     payload: { email, password }
// })
// export const emailSignin = data => ({
//     type: "EMAIL_SIGNIN",
//     payload: { email, password }
// })

// export const emailSignout = id => ({
//     type: "EMAIL_SIGNOUT",
//     payload: { id }
// })

// export const googleSignin = id => ({
//     type: "GOOGLE_SIGNIN",
//     payload: { id }
// })


const requestLogin = () => {
    return {
        type: 'LOGIN_REQUEST'
    };
};

const receiveLogin = user => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    };
};

const loginError = () => {
    return {
        type: 'LOGIN_FAILURE'
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
