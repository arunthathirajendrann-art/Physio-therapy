import React from 'react';
import { 
  Dumbbell, 
  CheckCircle2, 
  AlertCircle, 
  Flame, 
  Heart, 
  Timer, 
  Compass, 
  Trophy 
} from 'lucide-react';
import Card from '../Card';

export const StatCardsGrid = ({
  stats = {
    todayExercises: '3 Exercises',
    sessionsCompleted: '12 / 15',
    painLevel: '3 / 10',
    recoveryStreak: '8 Days',
    caloriesBurned: '180 kcal',
    exerciseTime: '28 min',
    mobilityImprovement: '+12° Flexion',
    weeklyGoal: '80%'
  }
}) => {
  const cards = [
    {
      title: "Today's Exercises",
      val: stats.todayExercises,
      desc: "Routine: Knee Flexion Focus",
      icon: Dumbbell,
      color: "text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20",
      accent: "indigo",
      badge: "Target: 45m"
    },
    {
      title: "Sessions Completed",
      val: stats.sessionsCompleted,
      desc: "92% compliance rate",
      icon: CheckCircle2,
      color: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20",
      accent: "emerald",
      badge: "On Track"
    },
    {
      title: "Current Pain Level",
      val: stats.painLevel,
      desc: "Resting stiffness: Mild",
      icon: AlertCircle,
      color: "text-accent-amber bg-accent-amber/10 border-accent-amber/20",
      accent: "amber",
      badge: "-2 points vs wk 1"
    },
    {
      title: "Recovery Streak",
      val: stats.recoveryStreak,
      desc: "Consistent rehabilitation",
      icon: Flame,
      color: "text-accent-rose bg-accent-rose/10 border-accent-rose/20",
      accent: "rose",
      badge: "Personal Best"
    },
    {
      title: "Calories Burned",
      val: stats.caloriesBurned,
      desc: "Calculated metabolic load",
      icon: Heart,
      color: "text-accent-rose bg-accent-rose/10 border-accent-rose/20",
      accent: "rose",
      badge: "+15% vs yesterday"
    },
    {
      title: "Exercise Time",
      val: stats.exerciseTime,
      desc: "Hold counts & active reps",
      icon: Timer,
      color: "text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20",
      accent: "indigo",
      badge: "Completed today"
    },
    {
      title: "Mobility Improvement",
      val: stats.mobilityImprovement,
      desc: "Measured flexion angle",
      icon: Compass,
      color: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20",
      accent: "emerald",
      badge: "Knee Joint"
    },
    {
      title: "Weekly Goal Progress",
      val: stats.weeklyGoal,
      desc: "Required minutes hit",
      icon: Trophy,
      color: "text-accent-amber bg-accent-amber/10 border-accent-amber/20",
      accent: "amber",
      badge: "Goal: 150m"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <Card 
            key={i} 
            hoverable 
            className="flex flex-col justify-between min-h-[145px] hover:border-border-bright text-left"
            glow={false}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  {card.title}
                </span>
                <h3 className="text-xl font-extrabold text-text-primary tracking-tight font-mono">
                  {card.val}
                </h3>
              </div>
              <div className={`p-2 rounded-xl border ${card.color}`}>
                <Icon size={18} />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border-subtle flex justify-between items-center text-[10px]">
              <span className="text-text-muted truncate mr-2">{card.desc}</span>
              <span className={`px-2 py-0.5 rounded-full font-semibold border bg-bg-elevated border-border-subtle text-text-secondary`}>
                {card.badge}
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default StatCardsGrid;
