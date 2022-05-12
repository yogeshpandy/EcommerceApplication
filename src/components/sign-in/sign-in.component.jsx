import { useState, 
    // useContext
 } from 'react';
import {  signInUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.util';
// import { UserContext } from '../../contexts/user.context';
import FormInput from '../../components/form-input/form-input.component'
import './sign-in.styles.scss'
import Button from '../../components/button/button.component';

const defaultFormFields = {
    email:'',
    password:''
}

const SignIn = () => {
    const [ formFields, setFormFields ] = new useState(defaultFormFields);
    const { email, password } = formFields;
    // const { setCurrentUser } = useContext(UserContext);

    const logGoogleUser = async () => {
        // const {user} = await signInWithGooglePopup();
        await signInWithGooglePopup();
    
        // // console.log("popup ",user)
        // setCurrentUser(user)
        // await createUserDocumentFromAuth(user);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            // const {user} = await signInUserWithEmailAndPassword(email, password);
            
            await signInUserWithEmailAndPassword(email, password);
            // console.log("logged ",user)
            // setCurrentUser(user)
            resetFormFields()
        }
        catch(err) {
            switch(err.code) {
                case 'auth/wrong-password':
                    alert("Invalid Password");
                    break;
                case 'auth/user-not-found':
                    alert('No user found');
                    break;
                default:
                    console.log(err)
            }
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <FormInput 
                    type="email" 
                    label={'Email'}
                    required
                    onChange={handleChange}
                    name='email' 
                    value={email}
                />
                <FormInput 
                        type="password" 
                        label={'Password'}
                        required
                        onChange={handleChange}
                        name='password' 
                        value={password}
                />
                <div className='button-group'>
                    <Button 
                        type='submit' 
                    >
                        Sign In
                    </Button>
                    <Button
                        type='button'
                        buttonType={'google'}
                        onClick={logGoogleUser}
                    >
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;