// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo-_oMNh0VMW0RbWwzZCzqrIGtleRROZ0",
  authDomain: "ecommerce-60b8a.firebaseapp.com",
  projectId: "ecommerce-60b8a",
  storageBucket: "ecommerce-60b8a.firebasestorage.app",
  messagingSenderId: "521429528702",
  appId: "1:521429528702:web:2a98f683b8de91f8d7a82f",
  measurementId: "G-JKM5MMDS3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export default app