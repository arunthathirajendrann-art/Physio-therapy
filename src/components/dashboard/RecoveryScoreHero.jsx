import React, { useEffect, useState } from 'react';
import { Play, Sparkles, Calendar, TrendingUp } from 'lucide-react';
import Button from '../Button';
import Card from '../Card';

export const RecoveryScoreHero = ({
  score = 78,
  weeksLeft = 4,
  totalWeeks = 8,
  aiMessage = "Your left knee extension stiffness is down by 14% since your last assessment. Focus on holding your extensions for 5 seconds today.",
  onStartSession
}) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 200);
    return () => clearTimeout(timer);
  }, [score]);

  // SVG Gauge calculations
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <Card 
      className="relative overflow-hidden bg-gradient-to-br from-bg-surface to-bg-elevated border border-border-subtle shadow-xl"
      glow
      glowColor="indigo"
    >
      {/* Decorative top right spotlight blur */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent-indigo/10 blur-[60px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10 text-left">
        {/* Main Text Content */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-2 text-accent-indigo">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest font-mono">
              AI Assessment Active
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">
              Your recovery path is on schedule.
            </h1>
            <p className="text-xs text-text-muted leading-relaxed max-w-xl">
              Expected Timeline: <span className="font-semibold text-text-primary">{weeksLeft} weeks remaining</span> (of a {totalWeeks}-week program).
            </p>
          </div>

          {/* AI Coach Comment */}
          <div className="p-4 rounded-xl border border-accent-indigo/10 bg-accent-indigo/5 max-w-xl">
            <p className="text-xs text-text-secondary leading-relaxed flex gap-2">
              <span className="text-sm font-bold text-accent-indigo">“</span>
              {aiMessage}
              <span className="text-sm font-bold text-accent-indigo">”</span>
            </p>
          </div>

          {/* Action Trigger */}
          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onStartSession}
              className="gap-2 font-bold shadow-lg shadow-accent-indigo/25 hover:shadow-accent-indigo/35 hover:scale-[1.02] transition-all"
            >
              <Play size={16} fill="currentColor" />
              Start Today's Session
            </Button>
          </div>
        </div>

        {/* AI Recovery Score Gauge */}
        <div className="flex flex-col items-center justify-center lg:border-l lg:border-border-subtle lg:pl-8 py-4">
          <div className="relative flex items-center justify-center">
            {/* SVG Circle Gauge */}
            <svg width="150" height="150" className="transform -rotate-90">
              <defs>
                <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              {/* Background ring */}
              <circle
                cx="75"
                cy="75"
                r={radius}
                fill="transparent"
                stroke="var(--border-subtle)"
                strokeWidth="10"
              />
              {/* Foreground animated score ring */}
              <circle
                cx="75"
                cy="75"
                r={radius}
                fill="transparent"
                stroke="url(#score-gradient)"
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>

            {/* Inner Content */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-extrabold text-text-primary tracking-tight font-mono">
                {animatedScore}%
              </span>
              <span className="text-[9px] uppercase font-bold text-text-muted mt-0.5 tracking-wider">
                Recovery Score
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-6 mt-4 text-xs font-mono text-text-secondary">
            <div className="flex items-center gap-1.5">
              <TrendingUp size={14} className="text-accent-emerald" />
              <span>+3.2% this wk</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-text-muted" />
              <span>Week {totalWeeks - weeksLeft}/{totalWeeks}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecoveryScoreHero;
