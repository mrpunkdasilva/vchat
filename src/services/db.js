import firebase from 'firebase/compat/app';
import "firebase/compat/database";


const firebaseConfig = {
    apiKey : "AIzaSyCMlJfy7FM2I-EwJKAwUpyvpTezBL5N8Po",
    authDomain : "vchat-b4cfe.firebaseapp.com",
    projectId : "vchat-b4cfe",
    storageBucket : "vchat-b4cfe.appspot.com",
    messagingSenderId : "1066176287682",
    appId : "1:1066176287682:web:6ac4fcb3c9685d14d5fc5b",
    measurementId : "G-ZW5C8XC979"
}

firebase.initializeApp( firebaseConfig );


// Initialize Realtime Database and get a reference to the service
const db = firebase.database();

export default db;