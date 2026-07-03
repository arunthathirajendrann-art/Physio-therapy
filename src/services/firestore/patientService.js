import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const createPatient = async (uid, email, displayName = '') => {
  try {
    const patientRef = doc(db, 'patients', uid);
    await setDoc(patientRef, {
      uid,
      email,
      displayName: displayName || email.split('@')[0],
      createdAt: new Date().toISOString(),
      role: 'patient',
      profileCompleted: false,
      recoveryScore: 0,
      streak: 0,
      painLevel: 0,
    });
    return { uid, email };
  } catch (error) {
    console.error('Error creating patient:', error);
    throw error;
  }
};

export const getPatient = async (uid) => {
  try {
    const patientRef = doc(db, 'patients', uid);
    const patientSnap = await getDoc(patientRef);
    if (patientSnap.exists()) {
      return patientSnap.data();
    }
    return null;
  } catch (error) {
    console.error('Error fetching patient:', error);
    throw error;
  }
};

export const updatePatient = async (uid, updates) => {
  try {
    const patientRef = doc(db, 'patients', uid);
    await updateDoc(patientRef, updates);
    return { uid, ...updates };
  } catch (error) {
    console.error('Error updating patient:', error);
    throw error;
  }
};

export const getPatientByEmail = async (email) => {
  try {
    const patientsRef = collection(db, 'patients');
    const q = query(patientsRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      return querySnapshot.docs[0].data();
    }
    return null;
  } catch (error) {
    console.error('Error fetching patient by email:', error);
    throw error;
  }
};
