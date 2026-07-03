import React from 'react';
import { Lightbulb, TrendingUp, Calendar, MessageSquare, Quote } from 'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const InsightsPanel = () => {
  const insights = [
    { id: 1, title: 'Recovery Trend', value: '+12%', trend: 'up', description: 'Average recovery improved this month' },
    { id: 2, title: 'Session Completion', value: '94%', trend: 'up', description: 'Higher than last quarter' },
    { id: 3, title: 'Patient Satisfaction', value: '4.8/5', trend: 'up', description: 'Based on recent feedback' },
  ];

  const followUps = [
    { id: 1, patient: 'Michael Torres', reason: 'Pain level review', date: 'Tomorrow' },
    { id: 2, patient: 'Sarah Chen', reason: 'Progress assessment', date: 'Wed' },
    { id: 3, patient: 'Lisa Johnson', reason: 'Treatment adjustment', date: 'Fri' },
  ];

  const recentMessages = [
    { id: 1, patient: 'Alex Rivera', preview: 'Thanks for the exercise plan!', time: '1h ago' },
    { id: 2, patient: 'Emily Watson', preview: 'Can we reschedule?', time: '3h ago' },
    { id: 3, patient: 'David Park', preview: 'Feeling much better', time: '5h ago' },
  ];

  const quote = '"The best way to predict the future is to create it." — Peter Drucker';

  return (
    <Card className="flex flex-col text-left" glow glowColor="emerald">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lightbulb size={16} className="text-accent-emerald" />
          <CardTitle className="text-sm font-bold text-text-primary">Insights</CardTitle>
        </div>
      </CardHeader>

      <div className="space-y-4 flex-1">
        {/* Recovery Insights */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
            <TrendingUp size={12} />
            <span>Recovery Insights</span>
          </div>
          {insights.map((insight) => (
            <div key={insight.id} className="p-3 rounded-lg bg-bg-deep/50 border border-border-subtle">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-text-primary">{insight.title}</span>
                <span className={`text-xs font-bold font-mono ${
                  insight.trend === 'up' ? 'text-accent-emerald' : 'text-accent-rose'
                }`}>
                  {insight.value}
                </span>
              </div>
              <p className="text-[10px] text-text-muted">{insight.description}</p>
            </div>
          ))}
        </div>

        {/* Recommended Follow-ups */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
            <Calendar size={12} />
            <span>Recommended Follow-ups</span>
          </div>
          {followUps.map((followUp) => (
            <div key={followUp.id} className="p-3 rounded-lg bg-bg-deep/50 border border-border-subtle">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-text-primary">{followUp.patient}</span>
                <span className="text-[10px] text-accent-indigo font-medium">{followUp.date}</span>
              </div>
              <p className="text-[10px] text-text-muted">{followUp.reason}</p>
            </div>
          ))}
        </div>

        {/* Recent Messages */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
            <MessageSquare size={12} />
            <span>Recent Messages</span>
          </div>
          {recentMessages.map((message) => (
            <div key={message.id} className="p-3 rounded-lg bg-bg-deep/50 border border-border-subtle">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-text-primary">{message.patient}</span>
                <span className="text-[10px] text-text-muted">{message.time}</span>
              </div>
              <p className="text-[10px] text-text-muted truncate">{message.preview}</p>
            </div>
          ))}
        </div>

        {/* Quick Statistics */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 rounded-lg bg-accent-indigo/5 border border-accent-indigo/20 text-center">
            <div className="text-lg font-bold text-text-primary font-mono">128</div>
            <div className="text-[9px] text-text-muted">Active Patients</div>
          </div>
          <div className="p-3 rounded-lg bg-accent-emerald/5 border border-accent-emerald/20 text-center">
            <div className="text-lg font-bold text-text-primary font-mono">34</div>
            <div className="text-[9px] text-text-muted">Today's Sessions</div>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-accent-indigo/10 to-accent-emerald/10 border border-accent-indigo/20">
          <div className="flex items-start gap-2">
            <Quote size={14} className="text-accent-indigo shrink-0 mt-0.5" />
            <p className="text-xs text-text-secondary leading-relaxed italic">
              {quote}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InsightsPanel;
