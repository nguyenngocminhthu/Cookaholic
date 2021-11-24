// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqiCLoDzpDXzFPkdMHdwCNVwVstNMGk9U",
    authDomain: "cookaholic-d3966.firebaseapp.com",
    projectId: "cookaholic-d3966",
    storageBucket: "cookaholic-d3966.appspot.com",
    messagingSenderId: "425746717080",
    appId: "1:425746717080:web:cacb858d7d4df6e7b7f3ed",
    measurementId: "G-C8PYK5L8BL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };