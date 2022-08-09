// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZzYimtmYNegobZgSVtq-gJ7oP93jBvvw",
  authDomain: "meu-primeiro-firebase-5a632.firebaseapp.com",
  projectId: "meu-primeiro-firebase-5a632",
  storageBucket: "meu-primeiro-firebase-5a632.appspot.com",
  messagingSenderId: "582907441209",
  appId: "1:582907441209:web:c284f4c856de6018561de8"

};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };