import { getRedirectResult } from 'firebase/auth';
import { useEffect } from "react";
import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopUp,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utlils";

function SignIn() {
    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            console.log(response);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        fetchData();
    }, []);

    const logUserGooglePopUp = async () => {
        const { user } = await signInWithGooglePopUp();      // response.user
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logUserGooglePopUp}>Sign In with Google PopUp</button>
            <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>
        </div>
    )
}

export default SignIn;