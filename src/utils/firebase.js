// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYOfuebU5E_fZtWMydBM7R5HNjnJWScMQ",
  projectId: "clone-96945",
  authDomain: "clone-96945.firebaseapp.com",
  messagingSenderId: "1094439518353",
  storageBucket: "clone-96945.appspot.com",
  measurementId: "G-Q6CD8N6T6M",
  appId: "1:1094439518353:web:83172ef832d0c2bf313f30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
