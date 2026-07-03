import React from 'react';
import { TrendingUp, Target, Calendar, Award } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const RecoverySummary = ({ summary = {} }) => {
  const defaultSummary = {
    overallRecovery: 89,
    todayPerformance: 'Excellent',
    recommendedExercise: 'Wall Slides',
    recoveryTimeline: '14 days',
    currentStreak: 12,
    sessionsThisWeek: 6
  };

  const summaryData = summary && Object.keys(summary).length > 0 ? summary : defaultSummary;

  return (
    <Card className="flex flex-col text-left" glow glowColor="emerald">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <TrendingUp size={16} className="text-accent-emerald" />
          Recovery Summary
        </CardTitle>
      </CardHeader>

      <div className="space-y-4 flex-1">
        {/* Overall Recovery */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-accent-emerald/10 to-accent-indigo/10 border border-accent-emerald/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-text-muted">Overall Recovery</span>
            <span className="text-xs font-bold text-accent-emerald">+5%</span>
          </div>
          <div className="text-4xl font-bold text-text-primary font-mono">{summaryData.overallRecovery}%</div>
        </div>

        {/* Today's Performance */}
        <div className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-muted mb-2">
            <Award size={12} />
            <span>Today's Performance</span>
          </div>
          <div className="text-lg font-bold text-accent-emerald">{summaryData.todayPerformance}</div>
        </div>

        {/* Recommended Exercise */}
        <div className="p-4 rounded-xl bg-accent-indigo/5 border border-accent-indigo/20">
          <div className="flex items-center gap-2 text-xs font-semibold text-accent-indigo mb-2">
            <Target size={12} />
            <span>Recommended Exercise</span>
          </div>
          <div className="text-sm font-medium text-text-primary">{summaryData.recommendedExercise}</div>
        </div>

        {/* Recovery Timeline */}
        <div className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-muted mb-2">
            <Calendar size={12} />
            <span>Recovery Timeline</span>
          </div>
          <div className="text-lg font-bold text-text-primary font-mono">{summaryData.recoveryTimeline}</div>
        </div>

        {/* Current Streak */}
        <div className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-text-muted mb-1">Current Streak</div>
              <div className="text-2xl font-bold text-text-primary font-mono">{summaryData.currentStreak} days</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold text-text-muted mb-1">This Week</div>
              <div className="text-2xl font-bold text-text-primary font-mono">{summaryData.sessionsThisWeek}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecoverySummary;
