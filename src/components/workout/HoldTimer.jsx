import React, { useState, useEffect } from 'react';
import { Timer, Clock, CheckCircle2, Pause } from 'lucide-react';
import Card from '../Card';

export const HoldTimer = ({
  state = 'ready', // ready, countdown, hold, rest, completed
  duration = 5,
  currentTime = 0
}) => {
  const [displayValue, setDisplayValue] = useState(duration);

  useEffect(() => {
    if (state === 'countdown') {
      setDisplayValue(duration);
    } else if (state === 'hold' || state === 'rest') {
      setDisplayValue(Math.max(0, duration - currentTime));
    } else if (state === 'completed') {
      setDisplayValue(0);
    } else {
      setDisplayValue(duration);
    }
  }, [currentTime, duration, state]);

  const progress = state === 'completed' 
    ? 100 
    : state === 'ready' 
      ? 0 
      : state === 'countdown'
        ? ((duration - displayValue) / duration) * 100
        : (currentTime / duration) * 100;

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getStateColor = () => {
    switch (state) {
      case 'ready': return 'text-text-muted';
      case 'countdown': return 'text-accent-amber';
      case 'hold': return 'text-accent-indigo';
      case 'rest': return 'text-accent-emerald';
      case 'completed': return 'text-accent-emerald';
      default: return 'text-text-muted';
    }
  };

  const getStateIcon = () => {
    switch (state) {
      case 'ready': return <Clock size={20} className={getStateColor()} />;
      case 'countdown': return <Timer size={20} className={getStateColor()} />;
      case 'hold': return <Pause size={20} className={getStateColor()} />;
      case 'rest': return <Timer size={20} className={getStateColor()} />;
      case 'completed': return <CheckCircle2 size={20} className={getStateColor()} />;
      default: return <Timer size={20} className={getStateColor()} />;
    }
  };

  const getStateLabel = () => {
    switch (state) {
      case 'ready': return 'Prepare';
      case 'countdown': return 'Get Ready';
      case 'hold': return 'Hold Position';
      case 'rest': return 'Rest Period';
      case 'completed': return 'Completed';
      default: return 'Prepare';
    }
  };

  return (
    <Card className="flex flex-col items-center justify-center text-center" glow glowColor="indigo">
      {/* Circular Timer */}
      <div className="relative mb-3">
        <svg width="120" height="120" className="transform -rotate-90">
          <defs>
            <linearGradient id="timer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
            stroke={state === 'completed' ? '#10B981' : 'url(#timer-gradient)'}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
          />
        </svg>

        {/* Inner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-1">
            {getStateIcon()}
          </div>
          <div className="text-4xl font-bold text-text-primary font-mono">
            {typeof displayValue === 'number' ? displayValue : displayValue}
          </div>
          <span className="text-[9px] uppercase font-semibold text-text-muted tracking-wider mt-1">
            {getStateLabel()}
          </span>
        </div>
      </div>

      {/* State Indicator */}
      <div className={`px-3 py-1 rounded-full text-[10px] font-semibold border ${
        state === 'completed' 
          ? 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20'
          : state === 'hold'
            ? 'bg-accent-indigo/10 text-accent-indigo border-accent-indigo/20'
            : state === 'countdown'
              ? 'bg-accent-amber/10 text-accent-amber border-accent-amber/20'
              : 'bg-bg-elevated text-text-muted border-border-subtle'
      }`}>
        {state === 'completed' ? 'Hold Complete' : `${duration}s Target`}
      </div>
    </Card>
  );
};

export default HoldTimer;
