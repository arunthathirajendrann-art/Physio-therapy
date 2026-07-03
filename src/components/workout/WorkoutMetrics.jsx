import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Activity, 
  Gauge, 
  Scale, 
  Flame, 
  Timer, 
  Heart,
  TrendingUp
} from 'lucide-react';
import Card, { CardTitle } from '../Card';

export const WorkoutMetrics = ({ metrics = [] }) => {
  const [animatedValues, setAnimatedValues] = useState({});

  const defaultMetrics = [
    { id: 1, name: 'Posture Accuracy', value: 96, unit: '%', icon: Target, color: 'accent-emerald' },
    { id: 2, name: 'Range of Motion', value: 88, unit: '°', icon: Activity, color: 'accent-indigo' },
    { id: 3, name: 'Movement Speed', value: 'Good', unit: '', icon: Gauge, color: 'accent-sky' },
    { id: 4, name: 'Stability', value: 91, unit: '%', icon: Scale, color: 'accent-emerald' },
    { id: 5, name: 'Balance', value: 89, unit: '%', icon: TrendingUp, color: 'accent-amber' },
    { id: 6, name: 'Calories', value: 46, unit: 'kcal', icon: Flame, color: 'accent-rose' },
    { id: 7, name: 'Duration', value: '08:42', unit: '', icon: Timer, color: 'accent-indigo' },
    { id: 8, name: 'Heart Rate', value: 92, unit: 'BPM', icon: Heart, color: 'accent-rose' },
  ];

  const workoutMetrics = metrics.length > 0 ? metrics : defaultMetrics;

  useEffect(() => {
    const animations = workoutMetrics.map(metric => {
      if (typeof metric.value === 'number') {
        return setTimeout(() => {
          setAnimatedValues(prev => ({
            ...prev,
            [metric.id]: metric.value
          }));
        }, 300 + metric.id * 100);
      }
      return null;
    });

    return () => animations.forEach(timer => timer && clearTimeout(timer));
  }, [workoutMetrics]);

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

  return (
    <Card className="flex flex-col text-left" glow={false}>
      {/* Header */}
      <div className="pb-3 border-b border-border-subtle mb-3">
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Activity size={16} className="text-accent-indigo" />
          Live Metrics
        </CardTitle>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {workoutMetrics.map((metric) => {
          const Icon = metric.icon;
          const displayValue = animatedValues[metric.id] !== undefined 
            ? animatedValues[metric.id] 
            : (typeof metric.value === 'number' ? 0 : metric.value);

          return (
            <div
              key={metric.id}
              className="p-3 rounded-xl border border-border-subtle bg-bg-deep/50 hover:bg-bg-elevated transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <div className={`p-1.5 rounded-lg border ${getColorClass(metric.color)}`}>
                  <Icon size={14} />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-text-primary font-mono">
                    {typeof displayValue === 'number' ? displayValue : displayValue}
                  </div>
                  <div className="text-[10px] text-text-muted">{metric.unit}</div>
                </div>
              </div>
              <div className="text-[10px] font-medium text-text-secondary truncate">
                {metric.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <div className="flex items-center justify-between text-[10px] text-text-muted">
          <span>Real-time tracking</span>
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
            <span>Active</span>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default WorkoutMetrics;
