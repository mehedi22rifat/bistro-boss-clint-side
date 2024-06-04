import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import userAxiosPublick from './../../Hooks/userAxiosPublick';



 export const AuthContext = createContext(null)
 
const  auth = getAuth(app)
const AuthProvider = ({children}) => {
const googleProvider = new GoogleAuthProvider()
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const axiosPublic = userAxiosPublick()


    const creatUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name,photo)=>{
         return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: photo
          })
    }
    

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth,currentUser=>{
         setUser(currentUser);
         console.log('currentUser', currentUser)
          if(currentUser){
            // token related work
            const userInfo = {email: currentUser.email};
             axiosPublic.post('/jwt',userInfo)
             .then(res =>{
                console.log(res.data)
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                }
            })
          }
          else{
            localStorage.removeItem('access-token')
          }
         setLoading(false)
       })
       return () =>{
         unSubscribe()
       }
        
    },[axiosPublic])

    const info ={
        user,
        loading,
        creatUser,
        singInUser,
        googleSingIn,
        updateUserProfile,
        logOut,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;