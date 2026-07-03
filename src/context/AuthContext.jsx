import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../services/firebase/firebase';
import { createPatient, getPatient } from '../services/firestore/patientService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (email, password) => {
    setAuthError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
      
      // Create patient document in Firestore
      await createPatient(userCredential.user.uid, email, userCredential.user.displayName || '');
      
      return userCredential.user;
    } catch (error) {
      setAuthError(error.message);
      throw error;
    }
  };

  const login = async (email, password) => {
    setAuthError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      setAuthError(error.message);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    setAuthError('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setCurrentUser(result.user);
      
      // Check if patient document exists, if not create one
      const existingPatient = await getPatient(result.user.uid);
      if (!existingPatient) {
        await createPatient(result.user.uid, result.user.email, result.user.displayName || '');
      }
      
      return result.user;
    } catch (error) {
      setAuthError(error.message);
      throw error;
    }
  };

  const logout = async () => {
    setAuthError('');
    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      setAuthError(error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      loading,
      authError,
      login,
      register,
      loginWithGoogle,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
