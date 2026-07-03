import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkoutHeader from '../components/workout/WorkoutHeader';
import WorkoutWorkspace from '../components/workout/WorkoutWorkspace';
import ExercisePlaylist from '../components/workout/ExercisePlaylist';
import AICoachPanel from '../components/workout/AICoachPanel';
import MovementQualityCard from '../components/workout/MovementQualityCard';
import WorkoutMetrics from '../components/workout/WorkoutMetrics';
import JointAnglePanel from '../components/workout/JointAnglePanel';
import RepCounter from '../components/workout/RepCounter';
import HoldTimer from '../components/workout/HoldTimer';
import SessionTimeline from '../components/workout/SessionTimeline';
import EmergencyControls from '../components/workout/EmergencyControls';

export const WorkoutArena = () => {
  const navigate = useNavigate();
  const [currentExerciseId, setCurrentExerciseId] = useState(2);
  const [showCountdown] = useState(false);
  const [countdownValue] = useState(3);
  const [holdTimerState] = useState('hold');

  const handleExerciseSelect = (id) => {
    setCurrentExerciseId(id);
  };

  const handlePause = () => {
    console.log('Session paused');
  };

  const handleRestart = () => {
    console.log('Session restarted');
  };

  const handleFinish = () => {
    navigate('/patient/dashboard');
  };

  const handleSkip = () => {
    console.log('Exercise skipped');
  };

  const handleContactTherapist = () => {
    console.log('Contact therapist');
  };

  return (
    <div className="space-y-6 text-left max-w-[1800px] mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">Workout Arena</h1>
        <p className="text-xs text-text-muted mt-1">AI-powered pose estimation and real-time feedback.</p>
      </div>

      {/* Workout Header */}
      <WorkoutHeader
        exerciseName="Shoulder Abduction"
        targetMuscle="Deltoids"
        difficulty="Medium"
        duration="8:00"
        currentSet={2}
        totalSets={3}
        currentRep={8}
        totalReps={12}
        onPause={handlePause}
        onRestart={handleRestart}
        onFinish={handleFinish}
      />

      {/* Three-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar - Exercise Playlist */}
        <div className="lg:col-span-3">
          <ExercisePlaylist
            currentExerciseId={currentExerciseId}
            onExerciseSelect={handleExerciseSelect}
            sessionProgress={25}
          />
        </div>

        {/* Center Content - Workout Workspace */}
        <div className="lg:col-span-6">
          <WorkoutWorkspace
            exerciseName="Shoulder Abduction"
            targetMuscle="Deltoids"
            instructions="Raise your arm to the side until it reaches shoulder level, then slowly lower back down. Keep your core engaged and avoid swinging."
            safetyTips="Keep movements slow and controlled. Stop if you feel sharp pain. Maintain proper posture throughout."
            showCountdown={showCountdown}
            countdownValue={countdownValue}
            showSkeleton={true}
          />
        </div>

        {/* Right Sidebar - Metrics & AI */}
        <div className="lg:col-span-3 space-y-4">
          {/* AI Coach Panel */}
          <AICoachPanel />

          {/* Movement Quality Card */}
          <MovementQualityCard />

          {/* Rep Counter & Hold Timer */}
          <div className="grid grid-cols-2 gap-3">
            <RepCounter
              currentRep={8}
              totalReps={12}
              currentSet={2}
              totalSets={3}
            />
            <HoldTimer
              state={holdTimerState}
              duration={5}
              currentTime={2}
            />
          </div>

          {/* Session Timeline */}
          <SessionTimeline currentStageIndex={1} />
        </div>
      </div>

      {/* Bottom Section - Metrics & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Metrics Grid */}
        <div className="lg:col-span-2">
          <WorkoutMetrics />
        </div>

        {/* Joint Angles */}
        <div className="lg:col-span-1">
          <JointAnglePanel />
        </div>
      </div>

      {/* Emergency Controls */}
      <div className="glass-panel rounded-xl p-4">
        <EmergencyControls
          onPause={handlePause}
          onSkip={handleSkip}
          onFinish={handleFinish}
          onContactTherapist={handleContactTherapist}
        />
      </div>
    </div>
  );
};

export default WorkoutArena;
