import React from 'react';
import { Trophy, Flame, Target, TrendingUp, Award, Star } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const Achievements = ({ achievements = [] }) => {
  const defaultAchievements = [
    { id: 1, title: 'New Milestone', description: 'Achieved 89% recovery score', icon: Trophy, color: 'accent-amber', unlocked: true },
    { id: 2, title: '14-Day Streak', description: 'Completed 14 consecutive sessions', icon: Flame, color: 'accent-rose', unlocked: true },
    { id: 3, title: '1000 Repetitions', description: 'Completed 1000 exercise repetitions', icon: Target, color: 'accent-indigo', unlocked: true },
    { id: 4, title: 'Pain Reduced', description: 'Pain level reduced by 57%', icon: TrendingUp, color: 'accent-emerald', unlocked: true },
    { id: 5, title: 'ROM Improved', description: 'Range of motion improved by 75%', icon: Award, color: 'accent-sky', unlocked: true },
    { id: 6, title: 'Perfect Week', description: '100% exercise accuracy for a week', icon: Star, color: 'accent-amber', unlocked: false },
  ];

  const achievementData = achievements.length > 0 ? achievements : defaultAchievements;

  const getColorClass = (color, unlocked) => {
    if (!unlocked) return 'text-text-muted bg-bg-elevated border-border-subtle opacity-50';
    
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
    <Card className="flex flex-col text-left" glow glowColor="amber">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Trophy size={16} className="text-accent-amber" />
          Achievements
        </CardTitle>
      </CardHeader>

      <div className="grid grid-cols-2 gap-3 flex-1">
        {achievementData.map((achievement) => {
          const Icon = achievement.icon;
          
          return (
            <div
              key={achievement.id}
              className={`p-4 rounded-xl border transition-all duration-200 ${
                achievement.unlocked 
                  ? 'bg-bg-deep/50 hover:border-border-bright' 
                  : 'bg-bg-elevated/50'
              }`}
            >
              <div className={`p-2 rounded-lg border mb-3 ${getColorClass(achievement.color, achievement.unlocked)}`}>
                <Icon size={20} />
              </div>
              <h4 className="text-xs font-semibold text-text-primary mb-1">{achievement.title}</h4>
              <p className="text-[10px] text-text-secondary leading-relaxed">{achievement.description}</p>
              {!achievement.unlocked && (
                <div className="mt-2 text-[9px] text-text-muted">Locked</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <div className="flex items-center justify-between text-[10px] text-text-muted">
          <span>Unlocked</span>
          <span className="font-bold text-accent-emerald">
            {achievementData.filter(a => a.unlocked).length}/{achievementData.length}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Achievements;
