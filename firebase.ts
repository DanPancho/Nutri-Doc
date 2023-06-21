import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAnv-sprnT82LjFWS1XNM0-R_j1ydezEWw",
  authDomain: "nutridoc-4ee6b.firebaseapp.com",
  projectId: "nutridoc-4ee6b",
  storageBucket: "nutridoc-4ee6b.appspot.com",
  messagingSenderId: "558062228794",
  appId: "1:558062228794:web:4130ecfc1d75f5634dac03",
  measurementId: "G-V5LD2QK8QG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
