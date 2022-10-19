import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {

    const [user,setUser] = useState(null);

const CreateUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const logIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
const logOut = ()=>{
    return signOut(auth);
}
//use effect to observe curently signed in user
useEffect(()=>{
    const unSubscribe = 
onAuthStateChanged(auth,currentUser =>{
console.log('current user',currentUser);
setUser(currentUser)
});
return () => unSubscribe();
},[]);


    const authInfo = {user,CreateUser,logIn,logOut};
    return (
   
          <AuthContext.Provider value={authInfo}>
            {children}
          </AuthContext.Provider>  
    );
};

export default UserContext;