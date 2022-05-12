import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.util';

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});

export const UserProvider =({children}) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const value = {currentUser, setCurrentUser}
    // signOutCurrentUser()
    useEffect(()=>{
        onAuthStateChangedListener((user)=>{
            console.log(user)
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}