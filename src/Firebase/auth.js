import firebase from "firebase";
import { db, firebaseConfig } from "../Firebase/Firebase.js";

const handleSignUp = (email, password) => {
  firebaseConfig
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};
const handleSignIn = (email, password) => {
  firebaseConfig
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};
let isAuthnticate;
const onChange = () => {
  firebaseConfig.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.displayName);
      console.log(user.email);
      isAuthnticate = true;
      //   console.log(user.photoURL);
      //  console.log(user.emailVerified);
      //  console.log(user.uid);
      return "valid";
    } else {
      console.log("error");
      isAuthnticate = false;
    }
  });
  return isAuthnticate;
};
const googlePopup = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebaseConfig
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      console.log(token, credential);
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
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
const handleLogOut = () => {
  firebaseConfig
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log(" Sign-out successful");
    })
    .catch((error) => {
      // An error happened.
      console.log("  An error happened with Sign-out ");
    });
};

export { handleSignUp, handleSignIn, onChange, googlePopup, handleLogOut };
