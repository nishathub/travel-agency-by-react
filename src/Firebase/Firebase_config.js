// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4145v1GHcF3x_9oryaE-4ysjDWcnECnM",
  authDomain: "project-travel-guru-4cf9d.firebaseapp.com",
  projectId: "project-travel-guru-4cf9d",
  storageBucket: "project-travel-guru-4cf9d.appspot.com",
  messagingSenderId: "114679672530",
  appId: "1:114679672530:web:065df98b9ba50cf9cf870b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;