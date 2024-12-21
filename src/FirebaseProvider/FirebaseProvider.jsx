import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
export const AuthContext=createContext(null)
import {TwitterAuthProvider , GoogleAuthProvider ,signInWithPopup ,GithubAuthProvider ,signOut } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const FirebaseProvider = ({children}) => {

    // keep the user hold 
    const [user, setUser]=useState(null)
    console.log(user)

    // createUser
const createUser=(email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)

}
// logInUser 
const logInUser=(email, password)=> {
    return signInWithEmailAndPassword(auth, email, password)


}
// here social logInUser 

// gitHub User 
const gitHubLogin=() => {
    return signInWithPopup(auth, gitHubProvider)

}
// TwitterUser
const twitterLogin=() => {
    return signInWithPopup(auth,twitterProvider)
}

// googleLogin 

const googleLogin=() => {
  return  signInWithPopup(auth, googleProvider)


}

// logout user 
const logout=() =>{
    setUser('')
    signOut(auth)
}
// Observer 

useEffect(() => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
         
       setUser(user)
        }
      });
},[])
const allValues={
    createUser,
    user,
    logInUser,
    googleLogin,
    gitHubLogin,
    logout,
    twitterLogin
}



    return (
        <AuthContext.Provider value={allValues}>
          {children}  
        </AuthContext.Provider >
    );
};

export default FirebaseProvider;