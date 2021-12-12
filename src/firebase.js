import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const config = {
  apiKey: "AIzaSyDkz-hNyZZKsR2OUEOpNjp8ltK1jt50d1E",
  authDomain: "udevs-blog-app.firebaseapp.com",
  databaseURL: "htt[s://udevs-blog-app-default-rtdb.firebaseio.com",
  projectId: "udevs-blog-app",
  storageBucket: "udevs-blog-app.appspot.com",
  messagingSenderId: "484321375773",
  appId: "1:484321375773:web:5841a3ee32535f090e78f4",
  // measurementId: "${config.measurementId}",
};

export const app = initializeApp(config);
export const db = getFirestore(app);
export const auth = getAuth(app);
