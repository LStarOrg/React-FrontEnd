import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWPmjYZSn7su7ssaL0AfgFWsKu1vL6ZZg",
    authDomain: "lstarv1.firebaseapp.com",
    databaseURL: "https://lstarv1-default-rtdb.firebaseio.com/",
    projectId: "lstarv1",
    storageBucket: "lstarv1.appspot.com",
    messagingSenderId: "1068938017053",
    appId: "1:1068938017053:web:b8d722986cad26606dc9f4",
    measurementId: "G-G4K2PZNYJ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebaseConfig.firebase;

  export default firebase;
  