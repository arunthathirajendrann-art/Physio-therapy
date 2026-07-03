import React from 'react';
import { CheckCircle2, Circle, Flag } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const RecoveryTimeline = ({ milestones = [] }) => {
  const defaultMilestones = [
    { id: 1, week: 'Week 1', title: 'Initial Assessment', description: 'Baseline ROM and pain level recorded', status: 'completed' },
    { id: 2, week: 'Week 2', title: 'First Milestone', description: 'Achieved 60° shoulder flexion', status: 'completed' },
    { id: 3, week: 'Week 3', title: 'Pain Reduction', description: 'Pain level reduced from 7 to 5', status: 'completed' },
    { id: 4, week: 'Week 4', title: 'ROM Improvement', description: 'Range of motion improved by 15°', status: 'completed' },
    { id: 5, week: 'Week 5', title: 'Consistency Goal', description: 'Completed 7 consecutive sessions', status: 'completed' },
    { id: 6, week: 'Week 6', title: 'Current Status', description: '89% recovery achieved', status: 'current' },
    { id: 7, week: 'Week 7', title: 'Target Goal', description: 'Achieve 95° ROM', status: 'pending' },
    { id: 8, week: 'Week 8', title: 'Final Goal', description: 'Complete rehabilitation program', status: 'pending' },
  ];

  const timelineData = milestones.length > 0 ? milestones : defaultMilestones;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 size={20} className="text-accent-emerald" />;
      case 'current':
        return <div className="w-5 h-5 rounded-full bg-accent-indigo border-2 border-accent-indigo animate-pulse" />;
      case 'pending':
        return <Circle size={20} className="text-text-muted" />;
      default:
        return <Circle size={20} className="text-text-muted" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-accent-emerald';
      case 'current':
        return 'text-accent-indigo font-semibold';
      case 'pending':
        return 'text-text-muted';
      default:
        return 'text-text-muted';
    }
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      <CardHeader>
        <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Flag size={16} className="text-accent-indigo" />
          Recovery Timeline
        </CardTitle>
      </CardHeader>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex items-start gap-4 min-w-max">
          {timelineData.map((milestone, index) => (
            <React.Fragment key={milestone.id}>
              {/* Milestone Node */}
              <div className="flex flex-col items-center min-w-[140px]">
                <div className="mb-3">
                  {getStatusIcon(milestone.status)}
                </div>
                <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${getStatusColor(milestone.status)}`}>
                  {milestone.week}
                </div>
                <div className={`text-xs font-semibold mb-1 ${getStatusColor(milestone.status)}`}>
                  {milestone.title}
                </div>
                <p className="text-[10px] text-text-muted text-center leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < timelineData.length - 1 && (
                <div className="flex-1 flex items-center pt-4">
                  <div 
                    className={`h-0.5 rounded-full transition-all duration-500 ${
                      milestone.status === 'completed' ? 'bg-accent-emerald' : 'bg-border-subtle'
                    }`}
                    style={{ width: '100%' }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="pt-3 border-t border-border-subtle flex items-center justify-center gap-4 text-[10px]">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 size={12} className="text-accent-emerald" />
          <span className="text-text-muted">Completed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-accent-indigo border-2 border-accent-indigo" />
          <span className="text-text-muted">Current</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Circle size={12} className="text-text-muted" />
          <span className="text-text-muted">Pending</span>
        </div>
      </div>
    </Card>
  );
};

export default RecoveryTimeline;
