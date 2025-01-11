import { createContext, useEffect, useState } from "react";
import auth from "../../Utilities/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, SignInMethod, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useJWT from "../../Hooks/useJWT";

export const AuthContext = createContext();
function AuthProvider({children}){
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {createToken,removeToken} = useJWT();


    //! Google SignIn 
    function googleSignin(){

        const provider =  new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    //! Signing Up 
    function signUpUser(email, password){

        return createUserWithEmailAndPassword(auth, email, password)
    }

    //! Signing in 
    function signinUser(email, password){

        return signInWithEmailAndPassword(auth, email, password)
    }

    //! Update Profile 
    function updateUserProfile(name,image){

        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        })
    }


    //! Signing Out 
    function signOutHandler(){
        return signOut(auth)
    }




    //! Observer 
    useEffect(()=>{
        const subscriber = onAuthStateChanged(auth, user =>{
            setUserInfo(user);
            if(user){
                //! Create Token 
                    const userCred = {
                        email:user.email,
                        photo:user.photoURL,
                    }
                    createToken(userCred);

                setIsLoading(false)
            }else{
                //! Remove Token 
                setIsLoading(false);
                removeToken();
            }

        })
        return ()=> subscriber();
    },[])

    const authData = {
        userInfo,
        isLoading,
        signUpUser,
        signinUser,
        updateUserProfile,
        googleSignin,
        signOutHandler,
    }
  return (
    <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider