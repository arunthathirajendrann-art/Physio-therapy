import React, { useState, useEffect } from 'react';
import { Bone, Activity } from 'lucide-react';
import Card, { CardTitle } from '../Card';

export const JointAnglePanel = ({ joints = [] }) => {
  const [animatedAngles, setAnimatedAngles] = useState({});

  const defaultJoints = [
    { id: 1, name: 'Left Shoulder', angle: 94, color: 'accent-indigo' },
    { id: 2, name: 'Right Shoulder', angle: 92, color: 'accent-indigo' },
    { id: 3, name: 'Left Elbow', angle: 176, color: 'accent-emerald' },
    { id: 4, name: 'Right Elbow', angle: 174, color: 'accent-emerald' },
    { id: 5, name: 'Hip', angle: 91, color: 'accent-sky' },
    { id: 6, name: 'Knee', angle: 168, color: 'accent-amber' },
  ];

  const jointData = joints.length > 0 ? joints : defaultJoints;

  useEffect(() => {
    // Simulate real-time angle updates
    const interval = setInterval(() => {
      setAnimatedAngles(prev => {
        const updates = {};
        jointData.forEach(joint => {
          const currentAngle = prev[joint.id] || joint.angle;
          const variation = Math.floor(Math.random() * 5) - 2; // -2 to +2 degrees
          updates[joint.id] = Math.max(0, Math.min(180, currentAngle + variation));
        });
        return updates;
      });
    }, 800);

    // Initial animation
    const initialTimer = setTimeout(() => {
      const initialValues = {};
      jointData.forEach(joint => {
        initialValues[joint.id] = joint.angle;
      });
      setAnimatedAngles(initialValues);
    }, 300);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, [jointData]);

  const getColorClass = (color) => {
    switch (color) {
      case 'accent-indigo': return 'text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20';
      case 'accent-emerald': return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'accent-sky': return 'text-accent-sky bg-accent-sky/10 border-accent-sky/20';
      case 'accent-amber': return 'text-accent-amber bg-accent-amber/10 border-accent-amber/20';
      case 'accent-rose': return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      default: return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  const getAngleColor = (angle) => {
    if (angle >= 160) return 'text-accent-emerald';
    if (angle >= 120) return 'text-accent-indigo';
    if (angle >= 80) return 'text-accent-sky';
    return 'text-accent-amber';
  };

  return (
    <Card className="flex flex-col text-left" glow={false}>
      {/* Header */}
      <div className="pb-3 border-b border-border-subtle mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo">
            <Bone size={14} />
          </div>
          <CardTitle className="text-sm font-bold text-text-primary">Joint Angles</CardTitle>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-text-muted">
          <Activity size={10} className="text-accent-emerald" />
          <span>Live</span>
        </div>
      </div>

      {/* Joint Angles Grid */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {jointData.map((joint) => {
          const displayAngle = animatedAngles[joint.id] !== undefined 
            ? animatedAngles[joint.id] 
            : joint.angle;

          return (
            <div
              key={joint.id}
              className="p-3 rounded-xl border border-border-subtle bg-bg-deep/50 hover:bg-bg-elevated transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-text-secondary truncate">
                  {joint.name}
                </span>
                <div className={`px-1.5 py-0.5 rounded text-[10px] font-bold font-mono ${getAngleColor(displayAngle)}`}>
                  {displayAngle}°
                </div>
              </div>
              
              {/* Angle Visualization Bar */}
              <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                <div
                  className={`h-full ${getColorClass(joint.color).split(' ')[1]} rounded-full transition-all duration-500 ease-out`}
                  style={{ width: `${(displayAngle / 180) * 100}%` }}
                />
              </div>

              {/* Angle Range Indicator */}
              <div className="flex justify-between mt-1.5 text-[8px] text-text-muted font-mono">
                <span>0°</span>
                <span>90°</span>
                <span>180°</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <div className="text-[10px] text-text-muted text-center">
          Real-time skeletal tracking
        </div>
      </div>
    </Card>
  );
};

export default JointAnglePanel;
