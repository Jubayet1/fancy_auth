// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM55bm-M3UmQcE9ItSYnsCbUhkd7oXjU8",
  authDomain: "fancyauth-31585.firebaseapp.com",
  projectId: "fancyauth-31585",
  storageBucket: "fancyauth-31585.appspot.com",
  messagingSenderId: "387187927222",
  appId: "1:387187927222:web:1872cb08a481be23389e17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;