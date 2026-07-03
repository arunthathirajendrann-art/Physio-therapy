import {
  doc,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  limit,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const saveSession = async (uid, sessionData) => {
  try {
    const sessionsRef = collection(db, 'sessions');
    const docRef = await addDoc(sessionsRef, {
      uid,
      ...sessionData,
      createdAt: new Date().toISOString(),
    });
    return { id: docRef.id, ...sessionData };
  } catch (error) {
    console.error('Error saving session:', error);
    throw error;
  }
};

export const getSessionHistory = async (uid, limitCount = 10) => {
  try {
    const sessionsRef = collection(db, 'sessions');
    const q = query(
      sessionsRef,
      where('uid', '==', uid),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching session history:', error);
    throw error;
  }
};

export const getSessionStats = async (uid) => {
  try {
    const sessionsRef = collection(db, 'sessions');
    const q = query(sessionsRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    const sessions = querySnapshot.docs.map((doc) => doc.data());

    const totalSessions = sessions.length;
    const totalMinutes = sessions.reduce((sum, session) => sum + (session.duration || 0), 0);
    const averageScore = totalSessions > 0
      ? sessions.reduce((sum, session) => sum + (session.score || 0), 0) / totalSessions
      : 0;

    return {
      totalSessions,
      totalMinutes,
      averageScore: Math.round(averageScore),
    };
  } catch (error) {
    console.error('Error fetching session stats:', error);
    throw error;
  }
};
