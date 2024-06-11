import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyD7ydiXzIbSG4AyETgM4Jed0w6J5Oxpxhk",
  authDomain: "clone-c9ab4.firebaseapp.com",
  projectId: "clone-c9ab4",
  storageBucket: "clone-c9ab4.appspot.com",
  messagingSenderId: "694296088398",
  appId: "1:694296088398:web:0beb1791a224aaab7d581f",
  measurementId: "G-W21FT9VZZ9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);  
export const db = getFirestore(app); 
export const provider = new GoogleAuthProvider();
