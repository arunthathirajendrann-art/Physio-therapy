import React, { useState, useEffect } from 'react';
import { Gauge, TrendingUp } from 'lucide-react';
import Card, { CardTitle } from '../Card';

export const MovementQualityCard = ({ 
  overallScore = 89,
  metrics = []
}) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  const defaultMetrics = [
    { name: 'Range of Motion', value: 84, color: 'accent-indigo' },
    { name: 'Stability', value: 92, color: 'accent-emerald' },
    { name: 'Balance', value: 90, color: 'accent-sky' },
    { name: 'Symmetry', value: 91, color: 'accent-amber' },
    { name: 'Smoothness', value: 87, color: 'accent-rose' },
    { name: 'Speed', value: 86, color: 'accent-indigo' },
  ];

  const qualityMetrics = metrics.length > 0 ? metrics : defaultMetrics;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(overallScore);
    }, 300);
    return () => clearTimeout(timer);
  }, [overallScore]);

  const getColorClass = (color) => {
    switch (color) {
      case 'accent-indigo': return 'bg-accent-indigo';
      case 'accent-emerald': return 'bg-accent-emerald';
      case 'accent-sky': return 'bg-accent-sky';
      case 'accent-amber': return 'bg-accent-amber';
      case 'accent-rose': return 'bg-accent-rose';
      default: return 'bg-accent-indigo';
    }
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      {/* Header */}
      <div className="pb-3 border-b border-border-subtle mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo">
            <Gauge size={14} />
          </div>
          <CardTitle className="text-sm font-bold text-text-primary">Movement Quality</CardTitle>
        </div>
        <div className="flex items-center gap-1 text-accent-emerald">
          <TrendingUp size={12} />
          <span className="text-[10px] font-semibold">+2.4%</span>
        </div>
      </div>

      {/* Overall Score */}
      <div className="flex items-center justify-center py-4 mb-4">
        <div className="relative">
          {/* Background Circle */}
          <div className="w-28 h-28 rounded-full border-8 border-border-subtle" />
          {/* Progress Circle */}
          <div 
            className="absolute inset-0 rounded-full border-8 border-transparent border-t-accent-indigo border-r-accent-emerald transition-all duration-1000 ease-out"
            style={{ 
              transform: `rotate(${(animatedScore / 100) * 360}deg)`,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            }}
          />
          {/* Inner Content */}
          <div className="absolute inset-2 rounded-full bg-bg-surface flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-text-primary font-mono">
              {animatedScore}
            </span>
            <span className="text-[9px] uppercase font-semibold text-text-muted mt-0.5">
              Overall
            </span>
          </div>
        </div>
      </div>

      {/* Metrics Breakdown */}
      <div className="space-y-3 flex-1">
        {qualityMetrics.map((metric, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-text-secondary font-medium">{metric.name}</span>
              <span className="text-text-primary font-bold font-mono">{metric.value}%</span>
            </div>
            <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
              <div
                className={`h-full ${getColorClass(metric.color)} rounded-full transition-all duration-700 ease-out`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <div className="text-[10px] text-text-muted text-center">
          AI-powered movement analysis
        </div>
      </div>
    </Card>
  );
};

export default MovementQualityCard;
