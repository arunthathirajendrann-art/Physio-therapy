import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RecoveryScoreHero from '../components/dashboard/RecoveryScoreHero';
import ActivityRingsCard from '../components/dashboard/ActivityRingsCard';
import StatCardsGrid from '../components/dashboard/StatCardsGrid';
import ProgressCharts from '../components/dashboard/ProgressCharts';
import AIInsights from '../components/dashboard/AIInsights';
import TodayExerciseCard from '../components/dashboard/TodayExerciseCard';
import Achievements from '../components/dashboard/Achievements';
import CalendarHeatmap from '../components/dashboard/CalendarHeatmap';
import QuickActions from '../components/dashboard/QuickActions';
import { useAuth } from '../context/AuthContext';
import { getPatient } from '../services/firestore/patientService';

export const PatientDashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPatientData = async () => {
      if (!currentUser?.uid) return;

      try {
        setLoading(true);
        setError('');
        const data = await getPatient(currentUser.uid);
        setPatientData(data);
      } catch (err) {
        console.error('Error loading patient data:', err);
        setError('Unable to load patient data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [currentUser]);

  const displayName = patientData?.displayName || currentUser?.email?.split('@')[0] || 'Patient';
  const recoveryScore = patientData?.recoveryScore || 87;
  const streak = patientData?.streak || 0;
  const painLevel = patientData?.painLevel || 0;

  const stats = {
    todayExercises: '3 Exercises',
    sessionsCompleted: '12 / 15',
    painLevel: `${painLevel} / 10`,
    recoveryStreak: `${streak} Days`,
    caloriesBurned: '180 kcal',
    exerciseTime: '28 min',
    mobilityImprovement: '+12° Flexion',
    weeklyGoal: '80%',
  };

  const handleStartWorkout = () => {
    navigate('/patient/workout');
  };

  const handleQuickAction = (id) => {
    switch(id) {
      case 'workout':
        navigate('/patient/workout');
        break;
      case 'analytics':
        navigate('/patient/analytics');
        break;
      case 'chat':
        navigate('/patient/chat');
        break;
      default:
        break;
    }
  };

  if (error && !loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="rounded-2xl border border-border-subtle bg-bg-surface px-6 py-4 text-sm text-accent-rose shadow-glass max-w-md text-center">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      {/* Dashboard Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Good Morning, {loading ? '...' : displayName}
          </h1>
          <p className="text-xs text-text-muted mt-1">Here is your recovery summary and assessment checklist for today.</p>
        </div>
        <div className="text-right text-[11px] font-mono text-text-muted shrink-0 bg-bg-surface border border-border-subtle rounded-lg px-3 py-1.5 shadow-sm">
          <span>Local Time: {new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      {/* Top Banner Grid (Hero Section + Activity Rings) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecoveryScoreHero onStartSession={handleStartWorkout} score={recoveryScore} isLoading={loading} />
        </div>
        <div>
          <ActivityRingsCard isLoading={loading} />
        </div>
      </div>

      {/* 8 Metric stats cards */}
      <StatCardsGrid stats={stats} isLoading={loading} />

      {/* Primary Analytics & AI Insights Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left deep charts & logs */}
        <div className="lg:col-span-2 space-y-6">
          <ProgressCharts isLoading={loading} />
          <CalendarHeatmap isLoading={loading} />
        </div>

        {/* Right AI actions and exercises */}
        <div className="space-y-6">
          <AIInsights isLoading={loading} />
          <TodayExerciseCard onStartWorkout={handleStartWorkout} isLoading={loading} />
        </div>
      </div>

      {/* Achievements Milestones */}
      <Achievements isLoading={loading} />

      {/* Quick Action Shortcuts */}
      <QuickActions onActionClick={handleQuickAction} isLoading={loading} />
    </div>
  );
};

export default PatientDashboard;
