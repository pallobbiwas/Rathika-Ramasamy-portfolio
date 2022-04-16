// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUsVjO7lpg9j9QhmGiUYPSQg1ZjSNKToE",
  authDomain: "assignment-10-2883c.firebaseapp.com",
  projectId: "assignment-10-2883c",
  storageBucket: "assignment-10-2883c.appspot.com",
  messagingSenderId: "706290432780",
  appId: "1:706290432780:web:a99ab8e367865bb71be729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;