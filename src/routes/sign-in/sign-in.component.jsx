import './sign-in.styles.scss'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.util';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In using Google</button>
        </div>
    );
}

export default SignIn;