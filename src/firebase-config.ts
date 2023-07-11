// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvhSt3IxNy72qn0BRVX9MQyuUaOIk5duw",
  authDomain: "metamask-auth-f1bde.firebaseapp.com",
  projectId: "metamask-auth-f1bde",
  storageBucket: "metamask-auth-f1bde.appspot.com",
  messagingSenderId: "981223017461",
  appId: "1:981223017461:web:c99bb11a8565312d9e6ebc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
