import React from 'react';
import { Video, Camera, ShieldCheck, AlertCircle } from 'lucide-react';

export const CameraPlaceholder = ({ 
  isReady = true, 
  showCountdown = false,
  countdownValue = 3,
  className = '' 
}) => {
  return (
    <div className={`relative w-full h-full min-h-[400px] bg-gradient-to-br from-bg-deep to-bg-elevated rounded-2xl overflow-hidden ${className}`}>
      {/* Camera Placeholder Background */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Camera Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-accent-indigo/20 blur-3xl rounded-full" />
          <div className="relative w-24 h-24 rounded-2xl bg-bg-surface border-2 border-border-subtle flex items-center justify-center shadow-2xl">
            {isReady ? (
              <Video size={48} className="text-accent-indigo" />
            ) : (
              <Camera size={48} className="text-text-muted" />
            )}
          </div>
        </div>

        {/* Status Text */}
        <div className="mt-6 text-center">
          {isReady ? (
            <>
              <div className="flex items-center justify-center gap-2 mb-2">
                <ShieldCheck size={16} className="text-accent-emerald" />
                <span className="text-sm font-semibold text-accent-emerald">Camera Active</span>
              </div>
              <p className="text-xs text-text-muted">Webcam feed ready for pose tracking</p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertCircle size={16} className="text-accent-amber" />
                <span className="text-sm font-semibold text-accent-amber">Initializing Camera...</span>
              </div>
              <p className="text-xs text-text-muted">Please grant camera permissions</p>
            </>
          )}
        </div>
      </div>

      {/* Camera Framing Guide */}
      <div className="absolute inset-4 border-2 border-dashed border-border-subtle/50 rounded-xl pointer-events-none">
        {/* Corner Markers */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-indigo/50 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-indigo/50 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-indigo/50 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-indigo/50 rounded-br lg" />
        
        {/* Safe Standing Boundary */}
        <div className="absolute inset-8 border border-accent-emerald/30 rounded-lg bg-accent-emerald/5 flex items-center justify-center">
          <span className="text-[10px] text-accent-emerald/70 font-medium uppercase tracking-wider">
            Safe Standing Zone
          </span>
        </div>
      </div>

      {/* Countdown Overlay */}
      {showCountdown && (
        <div className="absolute inset-0 bg-bg-deep/80 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-indigo/30 blur-3xl rounded-full" />
            <div className="relative w-32 h-32 rounded-full bg-accent-indigo/20 border-2 border-accent-indigo flex items-center justify-center">
              <span className="text-6xl font-bold text-accent-indigo animate-pulse">
                {countdownValue}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Camera Ready Indicator */}
      {isReady && (
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/20">
          <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="text-[10px] font-semibold text-accent-emerald">Live</span>
        </div>
      )}
    </div>
  );
};

export default CameraPlaceholder;
