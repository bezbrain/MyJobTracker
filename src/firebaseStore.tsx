import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const apiKey = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "jobtrack-61e08.firebaseapp.com",
  projectId: "jobtrack-61e08",
  storageBucket: "jobtrack-61e08.appspot.com",
  messagingSenderId: "830442270046",
  appId: "1:830442270046:web:988148f07d8e3b9a9c33cf",
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const colRef = collection(db, "allJobs");
export const userInfoColRef = collection(db, "userInfo");

export const trackDataInDB = onSnapshot;

export const addData = addDoc;

export const singleDoc = doc;

export const deleteSingleDoc = deleteDoc;

export const getSingleDoc = getDoc;

export const updateInfo = updateDoc;

// Authentication
export const auth = getAuth();
export const signUp = createUserWithEmailAndPassword;
export const signIn = signInWithEmailAndPassword;
