import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const registerUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const loginWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    registerUserWithEmail,
    loginWithEmailPassword,
    logout,
    updateUserProfile,
    signInWithGoogle,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
