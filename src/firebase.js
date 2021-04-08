import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyB5uOQEwEnBadGFOTD5_jUlZBcq7ib8e3c",
    authDomain: "sample-653da.firebaseapp.com",
    projectId: "sample-653da",
    storageBucket: "sample-653da.appspot.com",
    messagingSenderId: "1081140397",
    appId: "1:1081140397:web:72d15c6ed7006509e45224"
});

export const auth = app.auth();
export default app;
