import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCeRYP4Py6Dk19qOXFPd5NzN6ORL28cjHc",
  authDomain: "goldenglow.firebaseapp.com",
  projectId: "goldenglow",
  storageBucket: "goldenglow.appspot.com",
  messagingSenderId: "860105988392",
  appId: "1:860105988392:web:d186efbe7926078918581d",
  measurementId: "G-T75W8KC720"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const authGoogleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);