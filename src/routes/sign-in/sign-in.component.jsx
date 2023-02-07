import { signInWithGoogle } from "../../utils/firebase/firebase.utlils";
import { db } from "../../utils/firebase/firebase.utlils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utlils";

function SignIn() {
    const logUserGoogle = async () => {
        const { user } = await signInWithGoogle();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logUserGoogle}>Sign In with Google</button>
        </div>
    )
}

export default SignIn;