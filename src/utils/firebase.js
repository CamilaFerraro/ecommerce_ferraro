// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe2PL6c4JBr4LIt3DTkDcU6vDKrNKG7TY",
  authDomain: "coderhouse-ecommerce-6c48d.firebaseapp.com",
  projectId: "coderhouse-ecommerce-6c48d",
  storageBucket: "coderhouse-ecommerce-6c48d.appspot.com",
  messagingSenderId: "522837310230",
  appId: "1:522837310230:web:c714a0899a69a470f4ee37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//base de datos
export const db = getFirestore(app);