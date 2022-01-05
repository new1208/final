// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const config = {
  apiKey: "AIzaSyAyKQLUBsIXwqOO79xxb9blTY4IW1opIKk",
  authDomain: "reacttest-e32c2.firebaseapp.com",
  projectId: "reacttest-e32c2",
  storageBucket: "reacttest-e32c2.appspot.com",
  messagingSenderId: "857962517109",
  appId: "1:857962517109:web:caee619950458bcf1a9e3c",
  measurementId: "G-NGQS7R3703"
};