import React, { useEffect, useState } from 'react';
import { Award, Zap, CalendarDays } from 'lucide-react';
import Card from '../Card';

export const ActivityRingsCard = ({
  exerciseProgress = 0.85,  // 85%
  recoveryProgress = 0.72,  // 72%
  consistencyProgress = 0.90 // 90%
}) => {
  const [animatedProgress, setAnimatedProgress] = useState({
    exercise: 0,
    recovery: 0,
    consistency: 0
  });

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setAnimatedProgress({
        exercise: exerciseProgress,
        recovery: recoveryProgress,
        consistency: consistencyProgress
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [exerciseProgress, recoveryProgress, consistencyProgress]);

  // Ring configuration constants
  const size = 180;
  const center = size / 2;
  const strokeWidth = 14;
  const gap = 4;

  // Radii for three nested rings
  const r1 = center - strokeWidth / 2 - 4; // Outermost
  const r2 = r1 - strokeWidth - gap;      // Middle
  const r3 = r2 - strokeWidth - gap;      // Innermost

  const ringDetails = [
    {
      id: 'exercise',
      label: 'Exercise Completion',
      val: Math.round(animatedProgress.exercise * 100),
      rawVal: animatedProgress.exercise,
      radius: r1,
      color: 'url(#gradient-exercise)',
      trackColor: 'rgba(244, 63, 94, 0.1)',
      icon: Award,
      iconColor: 'text-accent-rose',
      desc: 'Target reps completed'
    },
    {
      id: 'recovery',
      label: 'Recovery Progress',
      val: Math.round(animatedProgress.recovery * 100),
      rawVal: animatedProgress.recovery,
      radius: r2,
      color: 'url(#gradient-recovery)',
      trackColor: 'rgba(99, 102, 241, 0.1)',
      icon: Zap,
      iconColor: 'text-accent-indigo',
      desc: 'Flexibility & ROM target'
    },
    {
      id: 'consistency',
      label: 'Weekly Consistency',
      val: Math.round(animatedProgress.consistency * 100),
      rawVal: animatedProgress.consistency,
      radius: r3,
      color: 'url(#gradient-consistency)',
      trackColor: 'rgba(16, 185, 129, 0.1)',
      icon: CalendarDays,
      iconColor: 'text-accent-emerald',
      desc: 'Days active this week'
    }
  ];

  return (
    <Card className="flex flex-col md:flex-row items-center gap-6" glow glowColor="indigo">
      {/* SVG Rings Visualization */}
      <div className="relative shrink-0 select-none">
        <svg width={size} height={size} className="transform -rotate-90">
          <defs>
            <linearGradient id="gradient-exercise" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#FB7185" />
            </linearGradient>
            <linearGradient id="gradient-recovery" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
            <linearGradient id="gradient-consistency" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>

          {ringDetails.map((ring) => {
            const circumference = 2 * Math.PI * ring.radius;
            const strokeDashoffset = circumference - ring.rawVal * circumference;

            return (
              <g key={ring.id}>
                {/* Background Track */}
                <circle
                  cx={center}
                  cy={center}
                  r={ring.radius}
                  fill="transparent"
                  stroke={ring.trackColor}
                  strokeWidth={strokeWidth}
                />
                {/* Animated Foreground Progress */}
                <circle
                  cx={center}
                  cy={center}
                  r={ring.radius}
                  fill="transparent"
                  stroke={ring.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </g>
            );
          })}
        </svg>

        {/* Small Logo overlay in the dead center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-bg-deep flex items-center justify-center border border-border-subtle shadow-inner">
            <span className="text-[10px] font-bold text-accent-indigo">AI</span>
          </div>
        </div>
      </div>

      {/* Metrics Labels */}
      <div className="flex-1 w-full space-y-4">
        <div>
          <h3 className="text-sm font-bold text-text-primary text-left">Rehab Activity Rings</h3>
          <p className="text-[11px] text-text-muted text-left">Your daily therapeutic compliance at a glance</p>
        </div>

        <div className="space-y-2.5">
          {ringDetails.map((ring) => {
            const Icon = ring.icon;
            return (
              <div 
                key={ring.id} 
                className="flex items-center gap-3 p-2 rounded-xl bg-bg-deep border border-border-subtle hover:border-border-bright transition-all duration-150 group"
              >
                <div className={`p-1.5 rounded-lg bg-bg-surface border border-border-subtle ${ring.iconColor}`}>
                  <Icon size={14} />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-semibold text-text-primary truncate">{ring.label}</span>
                    <span className="text-xs font-bold font-mono text-text-primary">{ring.val}%</span>
                  </div>
                  <span className="text-[10px] text-text-muted truncate block">{ring.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default ActivityRingsCard;
