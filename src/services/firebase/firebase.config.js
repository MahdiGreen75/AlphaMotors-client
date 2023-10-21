// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUMHgG6--HKzae63lBNxUsMOQGGsSR334",
  authDomain: "alphamotor-85ae6.firebaseapp.com",
  projectId: "alphamotor-85ae6",
  storageBucket: "alphamotor-85ae6.appspot.com",
  messagingSenderId: "795039042919",
  appId: "1:795039042919:web:027f161055a8ad3bedf3c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

