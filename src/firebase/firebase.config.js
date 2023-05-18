// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa5WFkGSRLWPs5S2fjn5SMiSRSrjGVAj0",
  authDomain: "figuru.firebaseapp.com",
  projectId: "figuru",
  storageBucket: "figuru.appspot.com",
  messagingSenderId: "509949833728",
  appId: "1:509949833728:web:34826fa76f8d25b7badee5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 