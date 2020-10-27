import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAaxf4ZasJGnKVlh3JJhUGwJZRySWGmrjA",
  authDomain: "clone-b1a9e.firebaseapp.com",
  databaseURL: "https://clone-b1a9e.firebaseio.com",
  projectId: "clone-b1a9e",
  storageBucket: "clone-b1a9e.appspot.com",
  messagingSenderId: "438702017266",
  appId: "1:438702017266:web:5446bf21daa1665e0cde6b",
  measurementId: "G-0KF2N66B8T",
});

const auth = firebase.auth();

export { auth };
