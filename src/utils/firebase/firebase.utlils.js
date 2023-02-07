import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from 'firebase/auth';

// App config (registering the app for web on firebase)
const firebaseConfig = {
    apiKey: "AIzaSyCmQgWC3ZYE0czTM1H8TtKUvQQQxP05-Jk",
    authDomain: "crwn-clothing-db-94dfc.firebaseapp.com",
    projectId: "crwn-clothing-db-94dfc",
    storageBucket: "crwn-clothing-db-94dfc.appspot.com",
    messagingSenderId: "688591319593",
    appId: "1:688591319593:web:58b8a2b943c3f25b19e238"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
