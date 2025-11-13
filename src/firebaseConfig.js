


// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDVqK1MOrmJAqWYHLsEBolsqXXrxoEYec",
  authDomain: "e-commerce-cfe53.firebaseapp.com",
  projectId: "e-commerce-cfe53",
  storageBucket: "e-commerce-cfe53.appspot.com", // 🔧 fixed wrong domain (.app → .appspot.com)
  messagingSenderId: "1096247228969",
  appId: "1:1096247228969:web:3cce416d6eb99968d53a38",
  measurementId: "G-NDSLM1WMCC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
