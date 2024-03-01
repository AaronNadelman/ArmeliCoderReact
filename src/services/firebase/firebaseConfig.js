// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA753zlG3NmOK5YKa0J_fLsUeyefIfFY00",
    authDomain: "armelishop.firebaseapp.com",
    projectId: "armelishop",
    storageBucket: "armelishop.appspot.com",
    messagingSenderId: "504744209726",
    appId: "1:504744209726:web:a8c9c3b61d08f037dd506f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);