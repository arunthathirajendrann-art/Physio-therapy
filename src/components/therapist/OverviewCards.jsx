import React, { useState, useEffect } from 'react';
import { Users, Calendar, TrendingUp, AlertTriangle, FileText, Activity } from 'lucide-react';
import Card from '../Card';

export const OverviewCards = ({ stats = [] }) => {
  const [animatedValues, setAnimatedValues] = useState({});

  const defaultStats = [
    { id: 1, name: 'Total Patients', value: 128, unit: '', icon: Users, color: 'accent-indigo', trend: '+12%', trendUp: true },
    { id: 2, name: "Today's Sessions", value: 34, unit: '', icon: Calendar, color: 'accent-emerald', trend: '+8%', trendUp: true },
    { id: 3, name: 'Patients Improving', value: 89, unit: '%', icon: TrendingUp, color: 'accent-emerald', trend: '+5%', trendUp: true },
    { id: 4, name: 'High Risk Patients', value: 6, unit: '', icon: AlertTriangle, color: 'accent-rose', trend: '-2', trendUp: false },
    { id: 5, name: 'Pending Reviews', value: 12, unit: '', icon: FileText, color: 'accent-amber', trend: '+3', trendUp: true },
    { id: 6, name: 'Avg Recovery Score', value: 84, unit: '%', icon: Activity, color: 'accent-sky', trend: '+2.4%', trendUp: true },
  ];

  const overviewStats = stats.length > 0 ? stats : defaultStats;

  useEffect(() => {
    const animations = overviewStats.map(stat => {
      return setTimeout(() => {
        setAnimatedValues(prev => ({
          ...prev,
          [stat.id]: stat.value
        }));
      }, 300 + stat.id * 100);
    });

    return () => animations.forEach(timer => clearTimeout(timer));
  }, [overviewStats]);

  const getColorClass = (color) => {
    switch (color) {
      case 'accent-indigo': return 'text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20';
      case 'accent-emerald': return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'accent-rose': return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      case 'accent-amber': return 'text-accent-amber bg-accent-amber/10 border-accent-amber/20';
      case 'accent-sky': return 'text-accent-sky bg-accent-sky/10 border-accent-sky/20';
      default: return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {overviewStats.map((stat) => {
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
              <span className={`text-[10px] font-semibold ${stat.trendUp ? 'text-accent-emerald' : 'text-accent-rose'}`}>
                {stat.trend}
              </span>
              <span className="text-[10px] text-text-muted">vs last month</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default OverviewCards;
