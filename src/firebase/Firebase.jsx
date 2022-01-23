// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHlUk5vij4R0jn1rCmoWWkEhEzTPUPao8",
  authDomain: "chat-app24.firebaseapp.com",
  databaseURL: "https://chat-app24-default-rtdb.firebaseio.com",
  projectId: "chat-app24",
  storageBucket: "chat-app24.appspot.com",
  messagingSenderId: "898764033706",
  appId: "1:898764033706:web:fcfbbe636d0874e5d80ad3",
  measurementId: "G-X9FPV239HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);