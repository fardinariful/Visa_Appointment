import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { auth } from "./firebase.init";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);



    const updatedUserProfile=(updatedData)=>{

        return updateProfile(auth.currentUser,updatedData)

    }
    
   

    

    const createNewUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
        
    }

    const signInWithGoogle =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            // console.log('current user',currentUser)
            setUser(currentUser);
            setLoading(false)
            
        });
        return ()=>{
            unsubscribe();

        }
    },[])
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    const userLogin =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        user,setUser,signInWithGoogle, createNewUser,logOut,userLogin,loading,updatedUserProfile
    };
   
     


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;