import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        .finally(() => {
            setLoading(false)
        })
    }

    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const userProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const userGoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const passReset = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return(() => unsubcribe())
    }, [])

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        userLogin,
        userLogOut,
        userProfile,
        userGoogleLogin,
        passReset,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;