import { signInWithGoogle } from "../../utils/firebase/firebase.utlils";

function SignIn() {
    const logUserGoogle = async () => {
        const response = await signInWithGoogle();
        console.log(response);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logUserGoogle}>Sign In with Google</button>
        </div>
    )
}

export default SignIn;