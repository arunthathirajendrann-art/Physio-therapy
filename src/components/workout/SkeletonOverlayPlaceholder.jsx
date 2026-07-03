import React from 'react';
import { Bone } from 'lucide-react';

export const SkeletonOverlayPlaceholder = ({ 
  showSkeleton = true,
  className = '' 
}) => {
  if (!showSkeleton) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Skeleton Tracking Overlay Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Central Body Silhouette */}
        <div className="relative w-48 h-64">
          {/* Head */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-accent-indigo/30 bg-accent-indigo/5" />
          
          {/* Torso */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-24 h-32 border-2 border-accent-indigo/30 bg-accent-indigo/5 rounded-lg" />
          
          {/* Left Arm */}
          <div className="absolute top-16 left-4 w-3 h-24 border-2 border-accent-emerald/30 bg-accent-emerald/5 rounded-full transform -rotate-12" />
          
          {/* Right Arm */}
          <div className="absolute top-16 right-4 w-3 h-24 border-2 border-accent-emerald/30 bg-accent-emerald/5 rounded-full transform rotate-12" />
          
          {/* Left Leg */}
          <div className="absolute bottom-0 left-8 w-3 h-20 border-2 border-accent-sky/30 bg-accent-sky/5 rounded-full" />
          
          {/* Right Leg */}
          <div className="absolute bottom-0 right-8 w-3 h-20 border-2 border-accent-sky/30 bg-accent-sky/5 rounded-full" />
          
          {/* Joint Points */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-indigo shadow-lg shadow-accent-indigo/50" />
          <div className="absolute top-20 left-6 w-2.5 h-2.5 rounded-full bg-accent-emerald shadow-lg shadow-accent-emerald/50" />
          <div className="absolute top-20 right-6 w-2.5 h-2.5 rounded-full bg-accent-emerald shadow-lg shadow-accent-emerald/50" />
          <div className="absolute top-36 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-indigo shadow-lg shadow-accent-indigo/50" />
          <div className="absolute top-48 left-10 w-2.5 h-2.5 rounded-full bg-accent-sky shadow-lg shadow-accent-sky/50" />
          <div className="absolute top-48 right-10 w-2.5 h-2.5 rounded-full bg-accent-sky shadow-lg shadow-accent-sky/50" />
        </div>
      </div>

      {/* Tracking Info Overlay */}
      <div className="absolute top-4 left-4 space-y-2">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-surface/80 backdrop-blur border border-border-subtle">
          <Bone size={14} className="text-accent-indigo" />
          <span className="text-[10px] font-semibold text-text-primary">Skeleton Tracking</span>
        </div>
        <div className="px-3 py-1.5 rounded-lg bg-bg-surface/80 backdrop-blur border border-border-subtle">
          <div className="text-[9px] text-text-muted">Joints Detected</div>
          <div className="text-xs font-bold text-accent-emerald font-mono">33 / 33</div>
        </div>
        <div className="px-3 py-1.5 rounded-lg bg-bg-surface/80 backdrop-blur border border-border-subtle">
          <div className="text-[9px] text-text-muted">Confidence</div>
          <div className="text-xs font-bold text-accent-indigo font-mono">94.2%</div>
        </div>
      </div>

      {/* Angle Indicators Placeholder */}
      <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-bg-surface/80 backdrop-blur border border-border-subtle">
        <div className="text-[9px] text-text-muted">Joint Angles</div>
        <div className="text-xs font-bold text-text-primary font-mono">Active Monitoring</div>
      </div>

      {/* FPS Counter */}
      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-bg-surface/80 backdrop-blur border border-border-subtle">
        <div className="text-[9px] text-text-muted">Processing</div>
        <div className="text-xs font-bold text-accent-emerald font-mono">30 FPS</div>
      </div>
    </div>
  );
};

export default SkeletonOverlayPlaceholder;
