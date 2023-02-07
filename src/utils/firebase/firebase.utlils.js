import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from 'firebase/auth';

import {
    doc,
    getDoc, getFirestore,
    setDoc // set the docs data
} from 'firebase/firestore';

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

// Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Firestore DB
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    // if !user exists then setDoc
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (err) {
            console.error("error creating user", err.message);
        }
    }

    // if user exists return userDocRef
    return userDocRef;
}

