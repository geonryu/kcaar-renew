import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhftq94UAo-ok-zoiAA1hcbqkBuilQA1A",
    authDomain: "kcaar-65f39.firebaseapp.com",
    projectId: "kcaar-65f39",
    storageBucket: "kcaar-65f39.appspot.com",
    messagingSenderId: "882177226976",
    appId: "1:882177226976:web:11058f28a6e2ad53f77885",
    measurementId: "G-YPG38FJDKT"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);