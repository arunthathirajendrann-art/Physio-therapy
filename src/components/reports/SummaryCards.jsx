import React, { useState, useEffect } from 'react';
import { TrendingUp, Activity, Target, Calendar, Flame, Award } from'lucide-react';
import Card from '../Card';

export const SummaryCards = ({ stats = [] }) => {
  const [animatedValues, setAnimatedValues] = useState({});

  const defaultStats = [
    { id: 1, name: 'Overall Recovery', value: 89, unit: '%', icon: TrendingUp, color: 'accent-emerald' },
    { id: 2, name: 'Pain Reduction', value: 24, unit: '%', icon: Activity, color: 'accent-indigo' },
    { id: 3, name: 'ROM Improvement', value: 18, unit: '%', icon: Target, color: 'accent-sky' },
    { id: 4, name: 'Sessions Completed', value: 36, unit: '', icon: Calendar, color: 'accent-amber' },
    { id: 5, name: 'Current Streak', value: 14, unit: ' Days', icon: Flame, color: 'accent-rose' },
    { id: 6, name: 'Exercise Accuracy', value: 92, unit: '%', icon: Award, color: 'accent-indigo' },
  ];

  const summaryStats = stats.length > 0 ? stats : defaultStats;

  useEffect(() => {
    const animations = summaryStats.map(stat => {
      return setTimeout(() => {
        setAnimatedValues(prev => ({
          ...prev,
          [stat.id]: stat.value
        }));
      }, 300 + stat.id * 100);
    });

    return () => animations.forEach(timer => clearTimeout(timer));
  }, [summaryStats]);

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {summaryStats.map((stat) => {
        const Icon = stat.icon;
        const displayValue = animatedValues[stat.id] !== undefined ? animatedValues[stat.id] : 0;

        return (
          <Card
            key={stat.id}
            hoverable
            className="flex flex-col justify-between min-h-[120px] hover:border-border-bright"
            glow={false}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  {stat.name}
                </span>
                <div className="flex items-baseline gap-1">
                  <h3 className="text-2xl font-extrabold text-text-primary tracking-tight font-mono">
                    {displayValue}
                  </h3>
                  {stat.unit && (
                    <span className="text-sm font-semibold text-text-muted">{stat.unit}</span>
                  )}
                </div>
              </div>
              <div className={`p-2 rounded-xl border ${getColorClass(stat.color)}`}>
                <Icon size={18} />
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-3">
              <span className="text-[10px] text-accent-emerald font-semibold">Excellent</span>
              <span className="text-[10px] text-text-muted">progress</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default SummaryCards;
