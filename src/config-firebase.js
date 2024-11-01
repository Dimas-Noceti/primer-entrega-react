// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTM89xkNzUAIy-75HlxkL2_h0HMAbV3QQ",
    authDomain: "react-9767f.firebaseapp.com",
    projectId: "react-9767f",
    storageBucket: "react-9767f.firebasestorage.app",
    messagingSenderId: "659161640595",
    appId: "1:659161640595:web:a07d2172793280192ce766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)