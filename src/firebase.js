// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIQ5NAZH3_fvk5-I2mE54LPRMeryUog58",
  authDomain: "clone-8c3e1.firebaseapp.com",
  projectId: "clone-8c3e1",
  storageBucket: "clone-8c3e1.appspot.com",
  messagingSenderId: "150243558455",
  appId: "1:150243558455:web:75bdf1dc29e3b3132debb2",
  measurementId: "G-LW3TMDYEMY",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
