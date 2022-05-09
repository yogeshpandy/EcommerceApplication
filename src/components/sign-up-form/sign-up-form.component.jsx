import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = new useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields)
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(confirmPassword!==password) {
            alert("password & confirm password mismatches")
            return;
        }
        if(!email)  {
            alert('email is null')
            return;
        }      

        const user =await createAuthUserWithEmailAndPassword(email, password, displayName);
        const userDocRef = await createUserDocumentFromAuth(user.user)
    } 

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign Up with your Email & Password</span>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <FormInput
                    type="text"
                    label={'Display Name'}
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />
               
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
                
                <FormInput 
                    type="password" 
                    label={'Confirm Password'}
                    required
                    onChange={handleChange}
                    name='confirmPassword' 
                    value={confirmPassword}
                />
                <Button 
                    type='submit'
                >Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;