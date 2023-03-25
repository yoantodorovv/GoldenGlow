import { FIREBASE_CONFING } from "../secret";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: FIREBASE_CONFING.apiKey,
  authDomain: FIREBASE_CONFING.authDomain,
  projectId: FIREBASE_CONFING.projectId,
  storageBucket: FIREBASE_CONFING.storageBucket,
  messagingSenderId: FIREBASE_CONFING.messagingSenderId,
  appId: FIREBASE_CONFING.appId,
  measurementId: FIREBASE_CONFING.measurementId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const authGoogleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);