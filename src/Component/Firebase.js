// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3HLBtpsWpVq0zqXp_k01T434KTwpSJrk",
  authDomain: "me-7fd6c.firebaseapp.com",
  projectId: "me-7fd6c",
  storageBucket: "me-7fd6c.appspot.com",
  messagingSenderId: "921797752232",
  appId: "1:921797752232:web:edcf7fa8d88d97c84f599d",
  measurementId: "G-K7QZ6JB6ER",
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth,db };