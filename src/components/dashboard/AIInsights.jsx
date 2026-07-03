import React from 'react';
import { Sparkles, ArrowRight, ShieldAlert, Award, Compass, HeartHandshake } from 'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const AIInsights = () => {
  const insights = [
    {
      title: "Recovery Status: Improving",
      desc: "Range of motion flexion is 3% ahead of timeline. Active inflammation markers are down.",
      icon: Compass,
      color: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20"
    },
    {
      title: "Form Warning: Flexion Compensation",
      desc: "Webcam logs show 15° hip compensation during unilateral squats. Focus on keeping hip alignment straight.",
      icon: ShieldAlert,
      color: "text-accent-rose bg-accent-rose/10 border-accent-rose/20"
    },
    {
      title: "Suggested Focus Area",
      desc: "Graded isometric quadricep holds (3 sets of 10s reps) to build knee stability.",
      icon: HeartHandshake,
      color: "text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20"
    },
    {
      title: "Upcoming Milestone",
      desc: "Clinical milestone review (Full Extension Assessment) scheduled in 5 days.",
      icon: Award,
      color: "text-accent-amber bg-accent-amber/10 border-accent-amber/20"
    }
  ];

  return (
    <Card className="flex flex-col text-left space-y-4" glow glowColor="indigo">
      <CardHeader className="border-b border-border-subtle pb-3 mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo">
            <Sparkles size={16} className="animate-pulse" />
          </div>
          <CardTitle className="text-sm font-bold text-text-primary">AI Clinical Insights</CardTitle>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded-full font-semibold border border-border-subtle bg-bg-deep text-text-secondary font-mono">
          Last sync: 2m ago
        </span>
      </CardHeader>

      <div className="space-y-3">
        {insights.map((insight, idx) => {
          const Icon = insight.icon;
          return (
            <div 
              key={idx} 
              className="flex gap-4 p-3 rounded-xl border border-border-subtle bg-bg-deep/50 hover:bg-bg-elevated hover:border-border-bright transition-all duration-150"
            >
              <div className={`p-2 rounded-lg border h-fit shrink-0 ${insight.color}`}>
                <Icon size={16} />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-xs font-bold text-text-primary truncate">
                  {insight.title}
                </h4>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  {insight.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-border-subtle">
        <button className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-border-subtle hover:border-border-bright bg-bg-elevated/50 hover:bg-bg-elevated text-xs font-semibold text-text-secondary hover:text-text-primary transition-all duration-150 group">
          Ask Coach AI for details
          <ArrowRight size={14} className="text-text-muted group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </Card>
  );
};

export default AIInsights;
