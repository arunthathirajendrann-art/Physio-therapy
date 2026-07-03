import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Landing from './pages/Landing';
import PatientLayout from './layouts/PatientLayout';
import PatientDashboard from './pages/PatientDashboard';
import WorkoutArena from './pages/WorkoutArena';
import Analytics from './pages/Analytics';
import RecoveryJournal from './pages/RecoveryJournal';
import AIChat from './pages/AIChat';
import Settings from './pages/Settings';

import TherapistLayout from './layouts/TherapistLayout';
import TherapistBoard from './pages/TherapistBoard';
import PlanBuilder from './pages/PlanBuilder';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding" element={<Onboarding />} />

            {/* Patient Workspace Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/patient" element={<PatientLayout />}>
                <Route index element={<Navigate to="/patient/dashboard" replace />} />
                <Route path="dashboard" element={<PatientDashboard />} />
                <Route path="workout" element={<WorkoutArena />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="journal" element={<RecoveryJournal />} />
                <Route path="chat" element={<AIChat />} />
                <Route path="settings" element={<Settings />} />
              </Route>

              {/* Therapist Workspace Routes */}
              <Route path="/therapist" element={<TherapistLayout />}>
                <Route index element={<Navigate to="/therapist/dashboard" replace />} />
                <Route path="dashboard" element={<TherapistBoard />} />
                <Route path="builder" element={<PlanBuilder />} />
              </Route>
            </Route>

            {/* Landing Page */}
            <Route path="/" element={<Landing />} />

            {/* Fallback Redirects */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
