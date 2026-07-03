import React from 'react';
import { CheckCircle2, Circle, ArrowDown } from 'lucide-react';

export const SessionTimeline = ({ 
  stages = [], 
  currentStageIndex = 1 
}) => {
  const defaultStages = [
    { id: 1, name: 'Warm-up', status: 'completed' },
    { id: 2, name: 'Exercise 1', status: 'current' },
    { id: 3, name: 'Exercise 2', status: 'pending' },
    { id: 4, name: 'Stretch', status: 'pending' },
    { id: 5, name: 'Cool Down', status: 'pending' },
    { id: 6, name: 'Summary', status: 'pending' },
  ];

  const timelineStages = stages.length > 0 ? stages : defaultStages;

  const getStatusIcon = (status) => {
    if (status === 'completed') {
      return <CheckCircle2 size={16} className="text-accent-emerald" />;
    }
    if (status === 'current') {
      return <div className="w-4 h-4 rounded-full bg-accent-indigo border-2 border-accent-indigo animate-pulse" />;
    }
    return <Circle size={16} className="text-text-muted" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-accent-emerald';
      case 'current': return 'text-accent-indigo font-semibold';
      case 'pending': return 'text-text-muted';
      default: return 'text-text-muted';
    }
  };

  const getConnectorColor = (index, currentStageIndex) => {
    if (index < currentStageIndex) return 'bg-accent-emerald';
    if (index === currentStageIndex) return 'bg-accent-indigo';
    return 'bg-border-subtle';
  };

  return (
    <div className="w-full bg-bg-surface border border-border-subtle rounded-xl p-4">
      <div className="flex items-center justify-between">
        {timelineStages.map((stage, index) => (
          <React.Fragment key={stage.id}>
            {/* Stage Node */}
            <div className="flex flex-col items-center">
              <div className="mb-2">
                {getStatusIcon(stage.status)}
              </div>
              <span className={`text-[10px] font-medium uppercase tracking-wider ${getStatusColor(stage.status)}`}>
                {stage.name}
              </span>
            </div>

            {/* Connector Arrow */}
            {index < timelineStages.length - 1 && (
              <div className="flex-1 flex items-center justify-center px-2">
                <ArrowDown 
                  size={14} 
                  className={`transition-colors duration-300 ${getConnectorColor(index, currentStageIndex)}`} 
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 h-1 bg-bg-elevated rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent-emerald to-accent-indigo rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentStageIndex + 1) / timelineStages.length) * 100}%` }}
        />
      </div>

      {/* Stage Info */}
      <div className="mt-3 flex items-center justify-between text-[10px] text-text-muted">
        <span>Stage {currentStageIndex + 1} of {timelineStages.length}</span>
        <span className="font-mono">
          {Math.round(((currentStageIndex + 1) / timelineStages.length) * 100)}% Complete
        </span>
      </div>
    </div>
  );
};

export default SessionTimeline;
