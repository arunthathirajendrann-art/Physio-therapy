import React from 'react';
import { TrendingUp, ArrowDown } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const ComparisonPanel = ({ comparisons = [] }) => {
  const defaultComparisons = [
    { id: 1, metric: 'Range of Motion', week1: 52, week6: 91, unit: '°', improvement: 75 },
    { id: 2, metric: 'Pain Level', week1: 7, week6: 3, unit: '/10', improvement: -57 },
    { id: 3, metric: 'Exercise Accuracy', week1: 78, week6: 92, unit: '%', improvement: 18 },
    { id: 4, metric: 'Session Duration', week1: 25, week6: 42, unit: 'min', improvement: 68 },
  ];

  const comparisonData = comparisons.length > 0 ? comparisons : defaultComparisons;

  return (
    <Card className="flex flex-col text-left" glow glowColor="emerald">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <TrendingUp size={16} className="text-accent-emerald" />
          Before vs After Comparison
        </CardTitle>
      </CardHeader>

      <div className="space-y-4 flex-1">
        {comparisonData.map((item) => {
          const isPositiveImprovement = item.improvement > 0;
          const improvementColor = isPositiveImprovement ? 'text-accent-emerald' : 'text-accent-rose';
          
          return (
            <div key={item.id} className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-text-primary">{item.metric}</span>
                <div className={`flex items-center gap-1 text-xs font-bold ${improvementColor}`}>
                  {isPositiveImprovement ? <TrendingUp size={12} /> : <ArrowDown size={12} />}
                  <span>{Math.abs(item.improvement)}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Week 1 */}
                <div className="space-y-2">
                  <div className="text-[10px] text-text-muted uppercase tracking-wider">Week 1</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-text-muted font-mono">{item.week1}</span>
                    <span className="text-sm text-text-muted">{item.unit}</span>
                  </div>
                  <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent-muted rounded-full"
                      style={{ width: `${(item.week1 / 100) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Week 6 */}
                <div className="space-y-2">
                  <div className="text-[10px] text-accent-emerald uppercase tracking-wider font-semibold">Week 6</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-accent-emerald font-mono">{item.week6}</span>
                    <span className="text-sm text-accent-emerald">{item.unit}</span>
                  </div>
                  <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent-emerald rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${(item.week6 / 100) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <div className="text-center text-xs text-text-muted">
          Comparing Week 1 baseline with Week 6 current performance
        </div>
      </div>
    </Card>
  );
};

export default ComparisonPanel;
