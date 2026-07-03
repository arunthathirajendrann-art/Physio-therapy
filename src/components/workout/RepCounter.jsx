import React, { useState, useEffect } from 'react';
import { Repeat } from 'lucide-react';
import Card from '../Card';

export const RepCounter = ({
  currentRep = 8,
  totalReps = 12,
  currentSet = 2,
  totalSets = 3
}) => {
  const [animatedRep, setAnimatedRep] = useState(0);
  const [animatedSet, setAnimatedSet] = useState(0);

  useEffect(() => {
    const repTimer = setTimeout(() => setAnimatedRep(currentRep), 300);
    const setTimer = setTimeout(() => setAnimatedSet(currentSet), 500);
    return () => {
      clearTimeout(repTimer);
      clearTimeout(setTimer);
    };
  }, [currentRep, currentSet]);

  const progress = (animatedRep / totalReps) * 100;
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Card className="flex flex-col items-center justify-center text-center" glow glowColor="indigo">
      {/* Circular Progress */}
      <div className="relative mb-3">
        <svg width="120" height="120" className="transform -rotate-90">
          <defs>
            <linearGradient id="rep-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          {/* Background ring */}
          <circle
            cx="60"
            cy="60"
            r={54}
            fill="transparent"
            stroke="var(--border-subtle)"
            strokeWidth="8"
          />
          {/* Foreground progress ring */}
          <circle
            cx="60"
            cy="60"
            r={54}
            fill="transparent"
            stroke="url(#rep-gradient)"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Inner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-center gap-1 mb-1">
            <Repeat size={16} className="text-accent-indigo" />
            <span className="text-3xl font-bold text-text-primary font-mono">
              {animatedRep}
            </span>
            <span className="text-lg text-text-muted font-mono">/ {totalReps}</span>
          </div>
          <span className="text-[9px] uppercase font-semibold text-text-muted tracking-wider">
            Current Rep
          </span>
        </div>
      </div>

      {/* Set Info */}
      <div className="flex items-center gap-4 text-xs">
        <div className="text-center">
          <div className="text-[10px] text-text-muted uppercase tracking-wider">Set</div>
          <div className="text-lg font-bold text-text-primary font-mono">
            {animatedSet} <span className="text-text-muted">/ {totalSets}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RepCounter;
