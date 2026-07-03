import React from 'react';
import { Target, ArrowRight } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const Recommendations = ({ recommendations = [] }) => {
  const defaultRecommendations = [
    { id: 1, title: 'Continue Shoulder Mobility', description: 'Maintain current shoulder abduction exercises to improve ROM', priority: 'high' },
    { id: 2, title: 'Increase Hold Time', description: 'Extend hold duration by 5 seconds for better muscle endurance', priority: 'medium' },
    { id: 3, title: 'Practice External Rotation', description: 'Add external rotation exercises to strengthen rotator cuff', priority: 'high' },
    { id: 4, title: 'Focus on Stability', description: 'Prioritize core stability exercises to enhance balance', priority: 'medium' },
  ];

  const recommendationData = recommendations.length > 0 ? recommendations : defaultRecommendations;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      case 'medium': return 'text-accent-amber bg-accent-amber/10 border-accent-amber/20';
      case 'low': return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      default: return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="amber">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Target size={16} className="text-accent-amber" />
          AI Recommendations
        </CardTitle>
      </CardHeader>

      <div className="space-y-3 flex-1">
        {recommendationData.map((recommendation) => (
          <div
            key={recommendation.id}
            className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle hover:border-border-bright transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-xs font-semibold text-text-primary">{recommendation.title}</h4>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getPriorityColor(recommendation.priority)}`}>
                {recommendation.priority.charAt(0).toUpperCase() + recommendation.priority.slice(1)}
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">{recommendation.description}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <button className="w-full text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center gap-1">
          View All Recommendations
          <ArrowRight size={12} />
        </button>
      </div>
    </Card>
  );
};

export default Recommendations;
