import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5cDv34g3xczl-Hwhn0w43J1Ms5g5ULSw",
  authDomain: "glow-aml-store.firebaseapp.com",
  projectId: "glow-aml-store",
  storageBucket: "glow-aml-store.firebasestorage.app",
  messagingSenderId: "559462540916",
  appId: "1:559462540916:web:08e32704f6824d38715321",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;