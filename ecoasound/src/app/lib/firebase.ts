import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeKoVpb8wr01PUZ3Zr_nUBrQj2Swd8Tgs",
  authDomain: "ecoasound.firebaseapp.com",
  projectId: "ecoasound",
  storageBucket: "ecoasound.firebasestorage.app",
  messagingSenderId: "671515064283",
  appId: "1:671515064283:web:55736e9d022bec818899fe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();