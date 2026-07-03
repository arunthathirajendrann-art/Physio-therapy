import React from 'react';
import { Activity, TrendingUp, Target, Activity as ActivityIcon, Quote } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const AIInsightsPanel = ({ insights = {} }) => {
  const defaultInsights = {
    todayRecovery: 89,
    movementQuality: 92,
    recoveryTrend: '+12%',
    recommendedExercise: 'Wall Slides',
    estimatedRecovery: '14 days',
    currentPain: 3,
    quote: '"Consistency is the key to successful rehabilitation."'
  };

  const insightsData = insights && Object.keys(insights).length > 0 ? insights : defaultInsights;

  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Activity size={16} className="text-accent-indigo" />
          AI Insights
        </CardTitle>
      </CardHeader>

      <div className="space-y-4 flex-1">
        {/* Today's Recovery */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-accent-emerald/10 to-accent-indigo/10 border border-accent-emerald/20">
          <div className="flex items-center gap-2 text-xs font-semibold text-accent-emerald mb-2">
            <ActivityIcon size={12} />
            <span>Today's Recovery</span>
          </div>
          <div className="text-3xl font-bold text-text-primary font-mono">{insightsData.todayRecovery}%</div>
        </div>

        {/* Movement Quality */}
        <div className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-muted mb-2">
            <Target size={12} />
            <span>Movement Quality</span>
          </div>
          <div className="text-3xl font-bold text-text-primary font-mono">{insightsData.movementQuality}%</div>
        </div>

        {/* Recovery Trend */}
        <div className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-muted mb-2">
            <TrendingUp size={12} />
            <span>Recovery Trend</span>
          </div>
          <div className="text-2xl font-bold text-accent-emerald font-mono">{insightsData.recoveryTrend}</div>
        </div>

        {/* Recommended Exercise */}
        <div className="p-4 rounded-xl bg-accent-indigo/5 border border-accent-indigo/20">
          <div className="text-xs font-semibold text-accent-indigo mb-2">Recommended Exercise</div>
          <div className="text-sm font-medium text-text-primary">{insightsData.recommendedExercise}</div>
        </div>

        {/* Estimated Recovery */}
        <div className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle">
          <div className="text-xs font-semibold text-text-muted mb-2">Estimated Recovery</div>
          <div className="text-lg font-bold text-text-primary font-mono">{insightsData.estimatedRecovery}</div>
        </div>

        {/* Current Pain Level */}
        <div className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle">
          <div className="text-xs font-semibold text-text-muted mb-2">Current Pain Level</div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-text-primary font-mono">{insightsData.currentPain}</div>
            <span className="text-sm text-text-muted">/10</span>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-accent-indigo/10 to-accent-emerald/10 border border-accent-indigo/20">
          <div className="flex items-start gap-2">
            <Quote size={14} className="text-accent-indigo shrink-0 mt-0.5" />
            <p className="text-xs text-text-secondary leading-relaxed italic">
              {insightsData.quote}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AIInsightsPanel;
