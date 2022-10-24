// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmd0WJfYDcuqztc-6d9kK-GR6jpINgFy0",
  authDomain: "realestatereactproject.firebaseapp.com",
  projectId: "realestatereactproject",
  storageBucket: "realestatereactproject.appspot.com",
  messagingSenderId: "563704396198",
  appId: "1:563704396198:web:2800d2b2705bf40a757767",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
