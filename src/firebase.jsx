import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDYsnLKnyHqw_sZ0jFQ5hGDNqw7hD9ZSpU",
    authDomain: "chat-d18e8.firebaseapp.com",
    projectId: "chat-d18e8",
    storageBucket: "chat-d18e8.appspot.com",
    messagingSenderId: "733741722391",
    appId: "1:733741722391:web:9879dc7706a64e9335e552",
    measurementId: "G-ZMC5L0VC72"
  };

export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);