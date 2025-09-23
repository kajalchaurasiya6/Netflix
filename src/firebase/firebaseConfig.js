import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCi7s3UpE7CV3ZB0gvq_n8duo0FLi50_iA",
    authDomain: "netflix-clone-a9c8d.firebaseapp.com",
    projectId: "netflix-clone-a9c8d",
    storageBucket: "netflix-clone-a9c8d.firebasestorage.app",
    messagingSenderId: "807371668462",
    appId: "1:807371668462:web:67f9401b2548107b412cff",
    measurementId: "G-5ZVBMZR683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
