import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../src/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser) 
        setLoading(false)
    })
    return ()=>{
        unsubscribe();
    }
    },[])
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading
    }
    return (
        
        <div>
            <AuthContext.Provider value={authInfo}>
                   {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;