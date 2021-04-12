import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBSCOKglgXjq3CgxCWC6wr8Pp-riotisB0",
  authDomain: "invitation-project-management.firebaseapp.com",
  projectId: "invitation-project-management",
  storageBucket: "invitation-project-management.appspot.com",
  messagingSenderId: "522996762790",
  appId: "1:522996762790:web:61f9dabf156dd2f8aa4c67",
  measurementId: "G-K16R0XKFTF",
});

const db = firebaseConfig.firestore();
export { db, firebaseConfig };
