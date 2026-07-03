import React, { useState } from 'react';
import OverviewCards from '../components/therapist/OverviewCards';
import PatientTable from '../components/therapist/PatientTable';
import RecoveryCharts from '../components/therapist/RecoveryCharts';
import HighRiskPanel from '../components/therapist/HighRiskPanel';
import PatientDrawer from '../components/therapist/PatientDrawer';
import ExerciseAssignment from '../components/therapist/ExerciseAssignment';
import AppointmentCalendar from '../components/therapist/AppointmentCalendar';
import ReportCenter from '../components/therapist/ReportCenter';
import NotificationPanel from '../components/therapist/NotificationPanel';
import InsightsPanel from '../components/therapist/InsightsPanel';
import QuickActions from '../components/therapist/QuickActions';

export const TherapistBoard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  

  return (
    <div className="space-y-6 text-left max-w-[1800px] mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">Therapist Dashboard</h1>
        <p className="text-xs text-text-muted mt-1">Monitor patient recovery, manage caseloads, and track clinical outcomes.</p>
      </div>

      {/* Overview Cards */}
      <OverviewCards />

      {/* Quick Actions */}
      <QuickActions
        onViewPatient={() => console.log('View patient')}
        onAssignExercise={() => console.log('Assign exercise')}
        onGenerateReport={() => console.log('Generate report')}
        onStartConsultation={() => console.log('Start consultation')}
        onScheduleSession={() => console.log('Schedule session')}
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Patient Table */}
        <div className="lg:col-span-8">
          <PatientTable onPatientSelect={handlePatientSelect} />
        </div>

        {/* Right Column - High Risk & Calendar */}
        <div className="lg:col-span-4 space-y-4">
          <HighRiskPanel
            onPatientView={handlePatientSelect}
            onPatientContact={() => console.log('Contact patient')}
          />
          <AppointmentCalendar />
        </div>
      </div>

      {/* Recovery Charts */}
      <RecoveryCharts />

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Center */}
        <div className="lg:col-span-1">
          <ReportCenter
            onDownload={() => console.log('Download report')}
            onShare={() => console.log('Share report')}
            onViewAI={() => console.log('View AI summary')}
          />
        </div>

        {/* Notification Panel */}
        <div className="lg:col-span-1">
          <NotificationPanel />
        </div>

        {/* Insights Panel */}
        <div className="lg:col-span-1">
          <InsightsPanel />
        </div>
      </div>

      {/* Exercise Assignment */}
      <ExerciseAssignment
        onAssign={() => console.log('Assign exercises')}
        onSaveDraft={() => console.log('Save draft')}
        onPreview={() => console.log('Preview plan')}
      />

      {/* Patient Drawer */}
      <PatientDrawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        patient={selectedPatient}
      />
    </div>
  );
};

export default TherapistBoard;
