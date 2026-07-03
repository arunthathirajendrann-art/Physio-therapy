import React from 'react';
import { Camera, Target, Zap } from 'lucide-react';
import Card from './Card';

export const PoseStatus = ({
  cameraStatus = 'inactive', // 'initializing' | 'active' | 'denied' | 'error'
  poseStatus = 'detecting', // 'detecting' | 'detected' | 'not-detected'
  fps = 0,
  confidence = 0,
  error = '',
  className = '',
}) => {
  const getCameraStatusColor = () => {
    switch (cameraStatus) {
      case 'active':
        return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'initializing':
        return 'text-accent-amber bg-accent-amber/10 border-accent-amber/20';
      case 'denied':
      case 'error':
        return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      default:
        return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  const getPoseStatusColor = () => {
    switch (poseStatus) {
      case 'detected':
        return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'detecting':
        return 'text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20';
      case 'not-detected':
        return 'text-accent-amber bg-accent-amber/10 border-accent-amber/20';
      default:
        return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  const getCameraLabel = () => {
    switch (cameraStatus) {
      case 'active':
        return 'Active';
      case 'initializing':
        return 'Initializing...';
      case 'denied':
        return 'Permission Denied';
      case 'error':
        return 'Error';
      default:
        return 'Inactive';
    }
  };

  const getPoseLabel = () => {
    switch (poseStatus) {
      case 'detected':
        return 'Detected';
      case 'detecting':
        return 'Detecting...';
      case 'not-detected':
        return 'No Person';
      default:
        return 'Idle';
    }
  };

  const getIndicatorDot = (status) => {
    if (status === 'initializing') {
      return <div className="w-2 h-2 rounded-full bg-current animate-pulse" />;
    }
    return <div className="w-2 h-2 rounded-full bg-current" />;
  };

  return (
    <Card className={`${className}`}>
      <div className="space-y-3">
        {error && (
          <div className="p-2 rounded-lg bg-accent-rose/5 border border-accent-rose/20">
            <p className="text-xs text-accent-rose">{error}</p>
          </div>
        )}

        {/* Status Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Camera Status */}
          <div className={`p-3 rounded-lg border ${getCameraStatusColor()} transition-all`}>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {getIndicatorDot(cameraStatus)}
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  Camera
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Camera size={14} />
                <span className="text-xs font-semibold">{getCameraLabel()}</span>
              </div>
            </div>
          </div>

          {/* Pose Status */}
          <div className={`p-3 rounded-lg border ${getPoseStatusColor()} transition-all`}>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {getIndicatorDot(poseStatus === 'detecting' ? 'initializing' : poseStatus)}
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  Pose
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={14} />
                <span className="text-xs font-semibold">{getPoseLabel()}</span>
              </div>
            </div>
          </div>

          {/* FPS */}
          <div className="p-3 rounded-lg bg-bg-elevated border border-border-subtle">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-indigo" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  FPS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-accent-indigo" />
                <span className="text-xs font-semibold font-mono">{fps}</span>
              </div>
            </div>
          </div>

          {/* Confidence */}
          <div className="p-3 rounded-lg bg-bg-elevated border border-border-subtle">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-emerald" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  Confidence
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold font-mono">{confidence}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicator Bar */}
        <div className="h-1 rounded-full bg-bg-elevated overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-indigo to-accent-emerald transition-all duration-300"
            style={{ width: `${Math.min(confidence, 100)}%` }}
          />
        </div>
      </div>
    </Card>
  );
};

export default PoseStatus;
