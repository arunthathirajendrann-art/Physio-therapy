import React, { useRef, useMemo } from 'react';
import { Target, Info, ShieldAlert } from 'lucide-react';
import PoseOverlay from '../PoseOverlay';
import PoseStatus from '../PoseStatus';
import usePoseDetection from '../../hooks/usePoseDetection';

export const WorkoutWorkspace = ({
  exerciseName = 'Shoulder Abduction',
  targetMuscle = 'Deltoids',
  instructions = 'Raise your arm to the side until it reaches shoulder level, then slowly lower back down. Keep your core engaged and avoid swinging.',
  safetyTips = 'Keep movements slow and controlled. Stop if you feel sharp pain. Maintain proper posture throughout.',
  showCountdown = false,
  countdownValue = 3,
  showSkeleton = true
}) => {
  const canvasRef = useRef(null);
  
  // Use the pose detection hook
  const {
    videoRef,
    isInitializing,
    isCameraReady,
    permissionDenied,
    detectionResults,
    fps,
    confidence,
    error,
    isPoseDetected,
  } = usePoseDetection();

  // Memoize camera status to prevent unnecessary re-renders
  const cameraStatus = useMemo(() => {
    if (permissionDenied) return 'denied';
    if (error && !isCameraReady) return 'error';
    if (isInitializing || !isCameraReady) return 'initializing';
    return 'active';
  }, [permissionDenied, error, isCameraReady, isInitializing]);

  // Memoize pose status
  const poseStatus = useMemo(() => {
    if (!isCameraReady) return 'detecting';
    if (isPoseDetected) return 'detected';
    return 'not-detected';
  }, [isCameraReady, isPoseDetected]);
  return (
    <div className="flex flex-col gap-4">
      {/* Pose Detection Overlay with Camera and Landmarks */}
      <div className="space-y-3">
        <PoseOverlay
          videoRef={videoRef}
          canvasRef={canvasRef}
          isInitializing={isInitializing}
          isCameraReady={isCameraReady}
          permissionDenied={permissionDenied}
          detectionResults={detectionResults}
          error={error}
        />
        
        {/* Pose Status Card */}
        {isCameraReady && (
          <PoseStatus
            cameraStatus={cameraStatus}
            poseStatus={poseStatus}
            fps={fps}
            confidence={confidence}
            error={error}
          />
        )}
      </div>

      {/* Exercise Information Card */}
      <div className="glass-panel rounded-xl p-5 space-y-4">
        {/* Exercise Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-text-primary">{exerciseName}</h3>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Target size={14} className="text-accent-indigo" />
              <span>{targetMuscle}</span>
            </div>
          </div>
          <div className="px-2 py-1 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20">
            <span className="text-[10px] font-semibold text-accent-indigo uppercase tracking-wider">
              Active
            </span>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
            <Info size={14} className="text-accent-indigo" />
            <span>Instructions</span>
          </div>
          <p className="text-sm text-text-primary leading-relaxed">
            {instructions}
          </p>
        </div>

        {/* Safety Tips */}
        <div className="p-3 rounded-lg bg-accent-amber/5 border border-accent-amber/20">
          <div className="flex items-start gap-2">
            <ShieldAlert size={16} className="text-accent-amber shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-xs font-semibold text-accent-amber">Safety Tips</div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {safetyTips}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutWorkspace;
