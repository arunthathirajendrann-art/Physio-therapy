import {
  doc,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const saveProgress = async (uid, progressData) => {
  try {
    const progressRef = collection(db, 'progress');
    const docRef = await addDoc(progressRef, {
      uid,
      ...progressData,
      createdAt: new Date().toISOString(),
    });
    return { id: docRef.id, ...progressData };
  } catch (error) {
    console.error('Error saving progress:', error);
    throw error;
  }
};

export const getProgress = async (uid) => {
  try {
    const progressRef = collection(db, 'progress');
    const q = query(
      progressRef,
      where('uid', '==', uid),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching progress:', error);
    throw error;
  }
};

export const getLatestProgress = async (uid) => {
  try {
    const progressRef = collection(db, 'progress');
    const q = query(
      progressRef,
      where('uid', '==', uid),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      return querySnapshot.docs[0].data();
    }
    return null;
  } catch (error) {
    console.error('Error fetching latest progress:', error);
    throw error;
  }
};

export const updateProgress = async (progressId, updates) => {
  try {
    const progressRef = doc(db, 'progress', progressId);
    await updateDoc(progressRef, updates);
    return { id: progressId, ...updates };
  } catch (error) {
    console.error('Error updating progress:', error);
    throw error;
  }
};
