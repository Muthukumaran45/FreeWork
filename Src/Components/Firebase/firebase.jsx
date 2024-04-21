import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; 
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBLK3Wo4ltCL5bBo2ZmGqiqs78rRwyuSKo",
    authDomain: "sample-a2b07.firebaseapp.com",
    databaseURL: "https://sample-a2b07-default-rtdb.firebaseio.com",
    projectId: "sample-a2b07",
    storageBucket: "sample-a2b07.appspot.com",
    messagingSenderId: "187602197493",
    appId: "1:187602197493:web:e61ce7ba3b50c25a27debc"
  };

const app = firebase.initializeApp(firebaseConfig);


export const database = app.database();
export const auth = app.auth();

export default app;
