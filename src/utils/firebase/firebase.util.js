// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ982Op8zjCe0jfYZrAbgav5xo6GGxU6s",
  authDomain: "ecom-app-db-45a35.firebaseapp.com",
  projectId: "ecom-app-db-45a35",
  storageBucket: "ecom-app-db-45a35.appspot.com",
  messagingSenderId: "880914259974",
  appId: "1:880914259974:web:692471f02865f83b22e387"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//create a provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); 

export const  createUserDocumentFromAuth = async (userAuth) => {
  console.log(userAuth.uid)
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)

  
  // if user data doesn't exists
      // create / set the document with the data from userAuth in my collection
    
    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      }
      catch(err) {
        console.log('Error creating the user',err)
      }
    }
    else {
     // if user data exists
      // return data
      return userDocRef;
    }


  
};