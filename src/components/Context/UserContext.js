import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);

const CreateUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}
const logIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const logOut = ()=>{
    setLoading(true)
    return signOut(auth);
}
//use effect to observe curently signed in user
useEffect(()=>{
    const unSubscribe = 
onAuthStateChanged(auth,currentUser =>{
console.log('current user',currentUser);
setUser(currentUser);
setLoading(false)
});

return () => unSubscribe();
},[]);


    const authInfo = {user,CreateUser,logIn,logOut,loading};
    return (
   
          <AuthContext.Provider value={authInfo}>
            {children}
          </AuthContext.Provider>  
    );
};

export default UserContext;