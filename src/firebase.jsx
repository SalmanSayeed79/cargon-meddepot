// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZRBq2SLHKiP0jKUPKffJmmvlllhFN4us",
    authDomain: "cargon-meddepot.firebaseapp.com",
    projectId: "cargon-meddepot",
    storageBucket: "cargon-meddepot.appspot.com",
    messagingSenderId: "679193949222",
    appId: "1:679193949222:web:fe1ccc4abf4dfabe64a2e7",
    measurementId: "G-MQQZ757ZZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app