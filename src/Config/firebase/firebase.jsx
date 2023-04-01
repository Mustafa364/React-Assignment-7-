// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8LjS82H46FkSGGE2rWYeTWPoCUaWHlrA",
  authDomain: "fb-db-auth-12.firebaseapp.com",
  projectId: "fb-db-auth-12",
  storageBucket: "fb-db-auth-12.appspot.com",
  messagingSenderId: "256798321404",
  appId: "1:256798321404:web:7478a5903087b0970e0579",
  measurementId: "G-J1PX9PTR08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;