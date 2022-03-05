
//usual error comes here 
//always import firebase like this  otherwise error like " firebase module not found " 

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJikgN4A6qG068a84jHd0wGfILiazxwdA",
    authDomain: "clone-e4b39.firebaseapp.com",
    projectId: "clone-e4b39",
    storageBucket: "clone-e4b39.appspot.com",
    messagingSenderId: "94693876291",
    appId: "1:94693876291:web:8feb0b593113ba9a93eaf6",
    measurementId: "G-E6XS291F3R"
  };
   
   const firebaseApp = firebase.initializeApp(firebaseConfig);


   const db = firebaseApp.firestore();
   const auth = firebase.auth();


export {db, auth};

