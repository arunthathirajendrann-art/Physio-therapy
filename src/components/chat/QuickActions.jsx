import React from 'react';
import { Play, FileText, TrendingUp, MessageSquare, Sparkles } from'lucide-react';
import Button from '../Button';

export const QuickActions = ({
  onStartSession,
  onViewReports,
  onViewProgress,
  onContactTherapist,
  onGenerateSummary
}) => {
  const actions = [
    { id: 1, label: 'Start Session', icon: Play, color: 'accent-emerald' },
    { id: 2, label: 'View Reports', icon: FileText, color: 'accent-indigo' },
    { id: 3, label: 'View Progress', icon: TrendingUp, color: 'accent-sky' },
    { id: 4, label: 'Contact Therapist', icon: MessageSquare, color: 'accent-amber' },
    { id: 5, label: 'Generate Summary', icon: Sparkles, color: 'accent-rose' },
  ];

  const handleAction = (actionId) => {
    switch (actionId) {
      case 1:
        if (onStartSession) onStartSession();
        break;
      case 2:
        if (onViewReports) onViewReports();
        break;
      case 3:
        if (onViewProgress) onViewProgress();
        break;
      case 4:
        if (onContactTherapist) onContactTherapist();
        break;
      case 5:
        if (onGenerateSummary) onGenerateSummary();
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-3">
      <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">
        Quick Actions
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.id}
              variant="secondary"
              size="sm"
              onClick={() => handleAction(action.id)}
              className="flex flex-col gap-2 py-3 h-auto"
            >
              <div className={`p-2 rounded-lg bg-${action.color}/10 text-${action.color}`}>
                <Icon size={20} />
              </div>
              <span className="text-xs font-medium">{action.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
