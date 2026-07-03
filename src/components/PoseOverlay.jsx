import React, { useState, useRef, useEffect } from 'react';
import { AlertCircle, ShieldCheck } from 'lucide-react';
import PoseCamera from './PoseCamera';
import PoseCanvas from './PoseCanvas';

export const PoseOverlay = ({
  videoRef,
  canvasRef,
  isInitializing = false,
  isCameraReady = false,
  permissionDenied = false,
  detectionResults = null,
  error = '',
  className = '',
}) => {
  const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 640,
    height: 480,
  });

  // Update canvas dimensions when container changes
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && videoRef?.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width, height });

        // Update canvas size
        if (canvasRef?.current) {
          canvasRef.current.width = width;
          canvasRef.current.height = height;
        }
      }
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [videoRef, canvasRef]);

  if (permissionDenied) {
    return (
      <div className={`relative w-full h-full min-h-[400px] bg-gradient-to-br from-bg-deep to-bg-elevated rounded-2xl overflow-hidden flex flex-col items-center justify-center ${className}`}>
        <div className="text-center space-y-4 px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-rose/20 blur-3xl rounded-full" />
            <div className="relative w-20 h-20 rounded-2xl bg-bg-surface border-2 border-border-subtle flex items-center justify-center shadow-2xl">
              <AlertCircle size={40} className="text-accent-rose" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Camera Permission Required</h3>
            <p className="text-sm text-text-muted max-w-sm mx-auto leading-relaxed">
              Please enable camera access in your browser settings to use pose detection.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !isCameraReady) {
    return (
      <div className={`relative w-full h-full min-h-[400px] bg-gradient-to-br from-bg-deep to-bg-elevated rounded-2xl overflow-hidden flex flex-col items-center justify-center ${className}`}>
        <div className="text-center space-y-4 px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-rose/20 blur-3xl rounded-full" />
            <div className="relative w-20 h-20 rounded-2xl bg-bg-surface border-2 border-border-subtle flex items-center justify-center shadow-2xl">
              <AlertCircle size={40} className="text-accent-rose" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Camera Error</h3>
            <p className="text-sm text-text-muted max-w-sm mx-auto leading-relaxed">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[400px] bg-gradient-to-br from-bg-deep to-bg-elevated rounded-2xl overflow-hidden ${className}`}
    >
      {/* Video Feed */}
      <PoseCamera ref={videoRef} className="rounded-2xl" />

      {/* Pose Landmarks Canvas */}
      <PoseCanvas
        ref={canvasRef}
        detectionResults={detectionResults}
        videoElement={videoRef?.current}
        landmarkRadius={5}
        connectionWidth={2}
        landmarkColor="#6366F1"
        connectionColor="#10B981"
      />

      {/* Camera Status Indicator */}
      {isCameraReady && (
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 z-10">
          <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="text-[10px] font-semibold text-accent-emerald">Live</span>
        </div>
      )}

      {/* Initializing Overlay */}
      {isInitializing && (
        <div className="absolute inset-0 bg-bg-deep/60 backdrop-blur-sm flex flex-col items-center justify-center z-20 rounded-2xl">
          <div className="space-y-3 text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-indigo/30 blur-3xl rounded-full animate-pulse" />
              <div className="relative w-16 h-16 rounded-full bg-accent-indigo/20 border-2 border-accent-indigo flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent-indigo animate-pulse" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">Initializing Camera</p>
              <p className="text-xs text-text-muted mt-1">Loading pose detection...</p>
            </div>
          </div>
        </div>
      )}

      {/* No Person Detected Message */}
      {isCameraReady && !isInitializing && detectionResults && detectionResults.landmarks?.length === 0 && (
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-bg-deep/80 to-transparent backdrop-blur-sm z-10">
          <div className="flex items-center gap-2 justify-center text-accent-amber">
            <AlertCircle size={14} />
            <span className="text-xs font-semibold">No person detected</span>
          </div>
        </div>
      )}

      {/* Framing Guide */}
      <div className="absolute inset-4 border-2 border-dashed border-border-subtle/50 rounded-xl pointer-events-none z-5">
        {/* Corner Markers */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-indigo/50 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-indigo/50 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-indigo/50 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-indigo/50 rounded-br-lg" />

        {/* Safe Standing Zone */}
        <div className="absolute inset-8 border border-accent-emerald/30 rounded-lg bg-accent-emerald/5 flex items-center justify-center pointer-events-none">
          <span className="text-[10px] text-accent-emerald/70 font-medium uppercase tracking-wider">
            Safe Standing Zone
          </span>
        </div>
      </div>
    </div>
  );
};

export default PoseOverlay;
