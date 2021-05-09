import firebase from "firebase";
import { firebaseConfig } from "../Firebase/Firebase.js";

export const SIGNUP_REQ = "SIGNUP_REQ";
export const SIGNUP_DONE = "SIGNUP_DONE";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const LOGIN_REQ = "LOGIN_REQ";
export const LOGIN_DONE = "LOGIN_DONE";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT_REQ = "LOGOUT_REQ";
export const LOGOUT_DONE = "LOGOUT_DONE";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const VERIFY_REQ = "VERIFY_REQ";
export const VERIFY_SUCC = "VERIFY_SUCC";

export const requestSignup = () => {
  return { type: SIGNUP_REQ };
};
const reciveSignup = (user) => {
  return { type: LOGIN_DONE, payload: { ...user } };
};
const failSignup = () => {
  return { type: LOGIN_FAIL };
};

export const requestSignin = () => {
  return { type: LOGIN_REQ };
};
const reciveSignin = (user) => {
  return { type: LOGIN_DONE, payload: { ...user } };
};
const failSignin = () => {
  return { type: LOGIN_FAIL };
};

const requestSignout = () => {
  return { type: LOGOUT_REQ };
};
const reciveSignout = () => {
  return { type: LOGOUT_DONE };
};
const failSignout = () => {
  return { type: LOGOUT_FAIL };
};
const verifyRequest = () => {
  return { type: VERIFY_REQ };
};

const verifySuccess = () => {
  return { type: VERIFY_SUCC };
};

const SignUpUser = (email, password) => (dispatch) => {
  dispatch(requestSignup());
  firebaseConfig
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      dispatch(reciveSignup(user));
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      dispatch(failSignup());
    });
};

const loginUser = (email, password) => (dispatch) => {
  dispatch(requestSignin());
  firebaseConfig
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      dispatch(reciveSignin(user));
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(failSignin());
      console.log(errorMessage);
    });
};
const LogOutUser = () => (dispatch) => {
  dispatch(requestSignout());
  firebaseConfig
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      dispatch(reciveSignout());
     // console.log(" Sign-out successful");
    })
    .catch((error) => {
      // An error happened.
      dispatch(failSignout());
      console.log("  An error happened with Sign-out ");
    });
};

const googlePopup = () => (dispatch) => {
  dispatch(requestSignin());
  var provider = new firebase.auth.GoogleAuthProvider();
  firebaseConfig
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
     // console.log(token, credential);
      // The signed-in user info.
      var user = result.user;
      dispatch(reciveSignin(user));
      console.log(user);
      // ...
    })
    .catch((error) => {
      dispatch(failSignin());
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorMessage, credential);
      // ...
    });
};

const VerifyUser = () => (dispatch) => {
  dispatch(verifyRequest());

  firebaseConfig.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.displayName);
      console.log(user.email);
      dispatch(reciveSignin(user));
    }
    dispatch(verifySuccess());
  });
};
export { SignUpUser, loginUser, LogOutUser, googlePopup, VerifyUser };
