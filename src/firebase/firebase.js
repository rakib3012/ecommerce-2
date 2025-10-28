 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCRkKBqX_XI_XSkrM4cgv29xeDmzULb4g",
  authDomain: "my-ecommerce-5e61f.firebaseapp.com",
  projectId: "my-ecommerce-5e61f",
  storageBucket: "my-ecommerce-5e61f.firebasestorage.app",
  messagingSenderId: "5338234909",
  appId: "1:5338234909:web:7dfdd61e08c458ac1746f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);