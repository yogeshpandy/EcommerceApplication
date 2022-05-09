import { useEffect } from 'react';
import { getRedirectResult} from 'firebase/auth'
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from '../../utils/firebase/firebase.util';
import { async } from '@firebase/util';
// import Button  from '../../components/button/button.component'
import './sign-in.styles.scss'
import Button from '../../components/button/button.component';

const SignIn = () => {
    useEffect(() => {
        async function fetchRedirectResult() {
            const response = await getRedirectResult(auth);
            if(response) {
                const userDocRef = createUserDocumentFromAuth(response.user)
            }
            console.log('response ',response)    
        }
        fetchRedirectResult()
    },[]);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log("popup ",user)
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const redirectGoogleUser = async () => {
        const {user} = await signInWithGoogleRedirect();
    }

    return (
        <div>
            <h1>Sign In Page PopUp</h1>
            {/* <Button 
                children={'Sign In using Google'}
                buttonType={'google'}
                onClick={logGoogleUser}    
            /> */}
            <button onClick={logGoogleUser}>Sign In using Google</button>
            <hr />
            <h1>Sign In Page Redirect</h1>
            <button onClick={redirectGoogleUser}>Sign In using Google</button>
        </div>
    );
}

export default SignIn;