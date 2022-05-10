import { 
    useState,
    // useEffect
 } from 'react';
// import { getRedirectResult} from 'firebase/auth'
import { 
    // auth,
    createUserDocumentFromAuth, signInWithGooglePopup, 
    // signInWithGoogleRedirect
 } from '../../utils/firebase/firebase.util';
// import { async } from '@firebase/util';
// import Button  from '../../components/button/button.component'
// import FormInput from '../../components/form-input/form-input.component'
import './authentication.styles.scss'
// import Button from '../../components/button/button.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignIn from '../../components/sign-in/sign-in.component';

// const defaultFormFields = {
//     email:'',
//     password:''
// }

const Authentication = () => {
    // const [formFields, setFormFields] = new useState(defaultFormFields);
    // const {email, password} = formFields;

    // useEffect(() => {
    //     async function fetchRedirectResult() {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = createUserDocumentFromAuth(response.user)
    //         }
    //         console.log('response ',response)    
    //     }
    //     fetchRedirectResult()
    // },[]);

    // const logGoogleUser = async () => {
    //     const {user} = await signInWithGooglePopup();
    //     console.log("popup ",user)
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }

    // const redirectGoogleUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    // }

    // const handleChange = (event) => {
    //     const {name, value} = event.target;
    //     setFormFields({...formFields, [name]:value})
    // }

    return (
        <div className='auth-container'>
            <SignIn />
            <SignUpForm />
        {/* <hr />
            <h1>Sign In Page Redirect</h1>
            <button onClick={redirectGoogleUser}>Sign In using Google</button> */}
        </div>
    );
}

export default Authentication;