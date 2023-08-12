import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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

const db = getFirestore();

export const colRef = collection(db, "allJobs");

export const addData = addDoc;
