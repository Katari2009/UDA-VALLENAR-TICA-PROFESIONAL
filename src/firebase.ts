import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBH-M_MxRrqZk8tJQ_vXfkP7jY6ZK5qLqw",
  authDomain: "uda-etica-profesional-9e5d3.firebaseapp.com",
  projectId: "uda-etica-profesional-9e5d3",
  storageBucket: "uda-etica-profesional-9e5d3.firebasestorage.app",
  messagingSenderId: "1096556345910",
  appId: "1:1096556345910:web:87a1fd1e4c6f2a8b3c9d5e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);