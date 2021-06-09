import *  as firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgmaZFkyg7SnEr4SDBZSv2gcLPj6CpTUs",
    authDomain: "signal-clone-d7edf.firebaseapp.com",
    projectId: "signal-clone-d7edf",
    storageBucket: "signal-clone-d7edf.appspot.com",
    messagingSenderId: "1098330212339",
    appId: "1:1098330212339:web:5a38df418a4690cd5eb486",
    measurementId: "G-VEVJQK4FNF"
    };


let app;

if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth}