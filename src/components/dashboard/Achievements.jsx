import React from 'react';
import { Trophy, Flame, Compass, Heart } from 'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const Achievements = () => {
  const achievements = [
    {
      name: "7-Day Streak",
      desc: "Completed exercises daily",
      icon: Flame,
      color: "text-accent-rose bg-accent-rose/10 border-accent-rose/20",
      progress: "7/7 days",
      unlocked: true
    },
    {
      name: "First 100 Reps",
      desc: "Total tracked repetitions",
      icon: Trophy,
      color: "text-accent-amber bg-accent-amber/10 border-accent-amber/20",
      progress: "128/100 reps",
      unlocked: true
    },
    {
      name: "Pain Reduced",
      desc: "Average pain drop below 4",
      icon: Heart,
      color: "text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20",
      progress: "Index: 3/10",
      unlocked: true
    },
    {
      name: "Consistency Champ",
      desc: "Over 90% weekly compliance",
      icon: Compass,
      color: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20",
      progress: "92% Score",
      unlocked: false
    }
  ];

  return (
    <Card className="flex flex-col text-left space-y-4" glow glowColor="indigo">
      <CardHeader className="border-b border-border-subtle pb-3 mb-1">
        <div>
          <CardTitle className="text-sm font-bold text-text-primary">Earned Milestones</CardTitle>
          <p className="text-[11px] text-text-muted mt-0.5">Celebrate your physical achievements and consistency</p>
        </div>
      </CardHeader>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {achievements.map((ach, idx) => {
          const Icon = ach.icon;
          return (
            <div 
              key={idx}
              className={`flex flex-col items-center justify-between p-4 rounded-xl border text-center transition-all duration-200 group
                ${ach.unlocked 
                  ? 'border-border-subtle bg-bg-deep/30 hover:border-border-bright hover:shadow-md hover:scale-[1.03]' 
                  : 'border-border-subtle/50 bg-bg-deep/10 opacity-50 select-none'
                }`}
            >
              {/* Badge Icon */}
              <div className={`p-3 rounded-full border mb-3 transition-transform duration-300 group-hover:rotate-12 ${ach.color}`}>
                <Icon size={20} className={ach.unlocked ? 'animate-pulse-slow' : ''} />
              </div>

              {/* Title & Description */}
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-text-primary group-hover:text-accent-indigo transition-colors truncate max-w-[120px]">
                  {ach.name}
                </h4>
                <p className="text-[9px] text-text-muted leading-tight max-w-[110px] mx-auto">
                  {ach.desc}
                </p>
              </div>

              {/* Status Tag */}
              <span className={`mt-3 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold border
                ${ach.unlocked 
                  ? 'bg-accent-indigo/5 border-accent-indigo/10 text-accent-indigo' 
                  : 'bg-bg-elevated border-border-subtle text-text-muted'
                }`}
              >
                {ach.unlocked ? ach.progress : 'Locked'}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Achievements;
