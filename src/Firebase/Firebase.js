import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAVjp07Z5-x3CNuN_NBMTaQ8p4OyCoGu_8",
  authDomain: "invitations-95e48.firebaseapp.com",
  projectId: "invitations-95e48",
  storageBucket: "invitations-95e48.appspot.com",
  messagingSenderId: "783871613848",
  appId: "1:783871613848:web:d494da20d3f8ab5b44e9ed",
  measurementId: "G-EDVBW1EPJG",
});

const db = firebaseConfig.firestore();
export { db, firebaseConfig };
