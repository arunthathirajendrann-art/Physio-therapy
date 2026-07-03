import React from 'react';
import { Play, FileText, MessageSquare, TrendingUp, UserPlus, ArrowRight } from 'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const QuickActions = ({ 
  onActionClick 
}) => {
  const actions = [
    {
      id: 'workout',
      label: "Start Session",
      desc: "Webcam workout arena",
      icon: Play,
      color: "text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20 hover:border-accent-indigo/40",
      accent: "indigo"
    },
    {
      id: 'analytics',
      label: "Progress Stats",
      desc: "Range of Motion curves",
      icon: TrendingUp,
      color: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20 hover:border-accent-emerald/40",
      accent: "emerald"
    },
    {
      id: 'chat',
      label: "Coach AI",
      desc: "Request modifications",
      icon: MessageSquare,
      color: "text-accent-rose bg-accent-rose/10 border-accent-rose/20 hover:border-accent-rose/40",
      accent: "rose"
    },
    {
      id: 'reports',
      label: "View Reports",
      desc: "PDF recovery exports",
      icon: FileText,
      color: "text-accent-amber bg-accent-amber/10 border-accent-amber/20 hover:border-accent-amber/40",
      accent: "amber"
    },
    {
      id: 'therapist',
      label: "Contact Therapist",
      desc: "Send message to clinical staff",
      icon: UserPlus,
      color: "text-accent-sky bg-accent-sky/10 border-accent-sky/20 hover:border-accent-sky/40",
      accent: "sky"
    }
  ];

  return (
    <Card className="flex flex-col text-left space-y-4" glow glowColor="indigo">
      <CardHeader className="border-b border-border-subtle pb-3 mb-1">
        <div>
          <CardTitle className="text-sm font-bold text-text-primary">Quick Shortcuts</CardTitle>
          <p className="text-[11px] text-text-muted mt-0.5">Instant triggers for core system actions</p>
        </div>
      </CardHeader>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <button
              key={act.id}
              onClick={() => onActionClick(act.id)}
              className="flex flex-col items-center justify-between p-4 rounded-xl border border-border-subtle bg-bg-deep/40 hover:bg-bg-elevated text-center transition-all duration-200 hover:scale-[1.03] group"
            >
              <div className={`p-2.5 rounded-full border mb-3 group-hover:scale-110 transition-transform ${act.color}`}>
                <Icon size={16} />
              </div>
              
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-text-primary group-hover:text-accent-indigo transition-colors block">
                  {act.label}
                </span>
                <span className="text-[9px] text-text-muted leading-tight block">
                  {act.desc}
                </span>
              </div>

              <span className="mt-3 text-[9px] font-bold text-text-secondary flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                Launch <ArrowRight size={10} />
              </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
};

export default QuickActions;
