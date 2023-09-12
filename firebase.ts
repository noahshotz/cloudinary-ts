// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const messagingSenderId = import.meta.env.VITE_FIREBASE_SENDER_ID;
const appId = import.meta.env.VITE_FIREBASE_APP_ID;
const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: "cloudinary-ts",
    storageBucket: "cloudinary-ts.appspot.com",
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
