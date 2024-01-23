
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDqrt5PSQCAF2D9cVlJqbuTdvywFuWRvEQ",
    authDomain: "e-commerece-websites.firebaseapp.com",
    projectId: "e-commerece-websites",
    storageBucket: "e-commerece-websites.appspot.com",
    messagingSenderId: "924307540218",
    appId: "1:924307540218:web:7844c76be8e6b6f432a143",
    measurementId: "G-14RS3S8Z99"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth } 