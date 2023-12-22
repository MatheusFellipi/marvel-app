// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc_1n6UmwrAk1TIEOrAiyxU4wzmypH3P4",
  authDomain: "marvel-app-25cc8.firebaseapp.com",
  projectId: "marvel-app-25cc8",
  storageBucket: "marvel-app-25cc8.appspot.com",
  messagingSenderId: "198734486030",
  appId: "1:198734486030:web:05db1540b3a934319fba5f",
  measurementId: "G-C72YB2JMJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);