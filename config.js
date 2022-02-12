import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAdtSOMGZ9wc8Ru0PKrYN1_5-bgyMtbC9M",
    authDomain: "e-ride-12-02-22.firebaseapp.com",
    projectId: "e-ride-12-02-22",
    storageBucket: "e-ride-12-02-22.appspot.com",
    messagingSenderId: "566555986778",
    appId: "1:566555986778:web:873388590e5f8bb0150163"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
