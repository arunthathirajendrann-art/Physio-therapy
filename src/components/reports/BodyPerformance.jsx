import React, { useState, useEffect } from 'react';
import { Activity, Target, Scale, Zap } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const BodyPerformance = ({ metrics = [] }) => {
  const [animatedValues, setAnimatedValues] = useState({});

  const defaultMetrics = [
    { id: 1, name: 'Left Shoulder', value: 89, icon: Activity, color: 'accent-indigo' },
    { id: 2, name: 'Right Shoulder', value: 93, icon: Activity, color: 'accent-indigo' },
    { id: 3, name: 'Hip Mobility', value: 90, icon: Target, color: 'accent-emerald' },
    { id: 4, name: 'Balance', value: 91, icon: Scale, color: 'accent-sky' },
    { id: 5, name: 'Stability', value: 88, icon: Scale, color: 'accent-amber' },
    { id: 6, name: 'Flexibility', value: 86, icon: Zap, color: 'accent-rose' },
  ];

  const performanceMetrics = metrics.length > 0 ? metrics : defaultMetrics;

  useEffect(() => {
    const animations = performanceMetrics.map(metric => {
      return setTimeout(() => {
        setAnimatedValues(prev => ({
          ...prev,
          [metric.id]: metric.value
        }));
      }, 300 + metric.id * 100);
    });

    return () => animations.forEach(timer => clearTimeout(timer));
  }, [performanceMetrics]);

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

  const getProgressColor = (value) => {
    if (value >= 90) return 'bg-accent-emerald';
    if (value >= 80) return 'bg-accent-indigo';
    if (value >= 70) return 'bg-accent-sky';
    return 'bg-accent-amber';
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Activity size={16} className="text-accent-indigo" />
          Body Performance
        </CardTitle>
      </CardHeader>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {performanceMetrics.map((metric) => {
          const Icon = metric.icon;
          const displayValue = animatedValues[metric.id] !== undefined ? animatedValues[metric.id] : 0;

          return (
            <div
              key={metric.id}
              className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle hover:border-border-bright transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg border ${getColorClass(metric.color)}`}>
                  <Icon size={16} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-text-primary font-mono">
                    {displayValue}%
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <span className="text-xs font-medium text-text-secondary">{metric.name}</span>
              </div>

              <div className="h-2 bg-bg-elevated rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${getProgressColor(displayValue)}`}
                  style={{ width: `${displayValue}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <div className="flex items-center justify-between text-[10px] text-text-muted">
          <span>Overall Performance</span>
          <span className="font-bold text-accent-emerald">Excellent</span>
        </div>
      </div>
    </Card>
  );
};

export default BodyPerformance;
