import React from 'react';
import { Sparkles } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const AIExplanationCard = ({ explanations = [] }) => {
  const defaultExplanations = [
    { 
      id: 1, 
      title: 'Shoulder Angle Improvement', 
      description: 'Your shoulder angle improved by approximately 8° compared to last week. This indicates better range of motion and reduced stiffness in the shoulder joint.',
      impact: 'positive',
      metric: '+8° improvement'
    },
    { 
      id: 2, 
      title: 'Movement Quality Increase', 
      description: 'Movement quality increased because your posture remained stable throughout the exercise. Your core engagement has improved significantly.',
      impact: 'positive',
      metric: '+12% quality score'
    },
    { 
      id: 3, 
      title: 'Pain Level Reduction', 
      description: 'Your pain level has decreased from 6/10 to 3/10 over the past two weeks. This suggests the current exercise regimen is effective.',
      impact: 'positive',
      metric: '-50% pain level'
    },
  ];

  const explanationData = explanations.length > 0 ? explanations : defaultExplanations;

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'positive': return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'negative': return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      case 'neutral': return 'text-accent-amber bg-accent-amber/10 border-accent-amber/20';
      default: return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Sparkles size={16} className="text-accent-indigo" />
          AI Explanations
        </CardTitle>
      </CardHeader>

      <div className="space-y-3 flex-1">
        {explanationData.map((explanation) => (
          <div
            key={explanation.id}
            className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle hover:border-border-bright transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-xs font-semibold text-text-primary">{explanation.title}</h4>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getImpactColor(explanation.impact)}`}>
                {explanation.metric}
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">{explanation.description}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
          <Sparkles size={10} className="text-accent-indigo" />
          <span>Explainable AI insights</span>
        </div>
      </div>
    </Card>
  );
};

export default AIExplanationCard;
