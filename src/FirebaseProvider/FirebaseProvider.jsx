import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
export const AuthContext=createContext(null)
import {TwitterAuthProvider ,FacebookAuthProvider, GoogleAuthProvider ,signInWithPopup  ,signOut } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

const twitterProvider = new TwitterAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
const FirebaseProvider = ({children}) => {
  

    // keep the user hold 
    const [user, setUser]=useState(null)
// 

    // createUser
const createUser=(email, password) => {
    // setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)

}
// logInUser 
const logInUser=(email, password)=> {
    // setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)


}

// Update Profile 

const updateUser=(name, image)=>{
   return  updateProfile(auth.currentUser, {
  displayName:name, photoURL: image
})
}
// here social logInUser 

// gitHub User 
const FacebookLogin=() => {
    // setLoading(true)
    return signInWithPopup(auth, FacebookProvider)

}
// TwitterUser
const twitterLogin=() => {
    // setLoading(true)
    return signInWithPopup(auth,twitterProvider)
}

// googleLogin 

const googleLogin=() => {
    // setLoading(true)
  return  signInWithPopup(auth, googleProvider)


}

// logout user 
const logout=() =>{
    
    signOut(auth)
    setUser('')

}


// Observer 

useEffect(() => {

  const unsubscribe=  onAuthStateChanged(auth, (user) => {
        if (user) {
       
       setUser(user)
    //    setLoading(false)
        }
        
      });
      return () => unsubscribe() 
},[])
const allValues={
    createUser,
    user,
    logInUser,
    googleLogin,
 
    logout,
    twitterLogin,
    // loading,
    updateUser,
    FacebookLogin
}



    return (
        <AuthContext.Provider value={allValues}>
          {children}  
        </AuthContext.Provider >
    );
};

export default FirebaseProvider;