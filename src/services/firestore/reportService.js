import {
  doc,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  getDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const saveReport = async (uid, reportData) => {
  try {
    const reportsRef = collection(db, 'reports');
    const docRef = await addDoc(reportsRef, {
      uid,
      ...reportData,
      createdAt: new Date().toISOString(),
    });
    return { id: docRef.id, ...reportData };
  } catch (error) {
    console.error('Error saving report:', error);
    throw error;
  }
};

export const getReports = async (uid) => {
  try {
    const reportsRef = collection(db, 'reports');
    const q = query(
      reportsRef,
      where('uid', '==', uid),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

export const getReport = async (reportId) => {
  try {
    const reportRef = doc(db, 'reports', reportId);
    const reportSnap = await getDoc(reportRef);
    if (reportSnap.exists()) {
      return { id: reportSnap.id, ...reportSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Error fetching report:', error);
    throw error;
  }
};

export const getLatestReport = async (uid) => {
  try {
    const reportsRef = collection(db, 'reports');
    const q = query(
      reportsRef,
      where('uid', '==', uid),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
    }
    return null;
  } catch (error) {
    console.error('Error fetching latest report:', error);
    throw error;
  }
};
