import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { ReCaptchaV3Provider, initializeAppCheck } from "firebase/app-check";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "kcaar-65f39.firebaseapp.com",
    projectId: "kcaar-65f39",
    storageBucket: "kcaar-65f39.appspot.com",
    messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
    recaptchaId: import.meta.env.VITE_RECAPTCHA_KEY || "",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(firebaseConfig.recaptchaId),
    isTokenAutoRefreshEnabled: true 
});
  