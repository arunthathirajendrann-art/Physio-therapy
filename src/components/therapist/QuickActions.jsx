import React from 'react';
import { User, Dumbbell, FileText, Video, Calendar } from'lucide-react';
import Button from '../Button';

export const QuickActions = ({
  onViewPatient,
  onAssignExercise,
  onGenerateReport,
  onStartConsultation,
  onScheduleSession
}) => {
  const actions = [
    { id: 1, label: 'View Patient', icon: User, color: 'accent-indigo' },
    { id: 2, label: 'Assign Exercise', icon: Dumbbell, color: 'accent-emerald' },
    { id: 3, label: 'Generate Report', icon: FileText, color: 'accent-sky' },
    { id: 4, label: 'Start Consultation', icon: Video, color: 'accent-amber' },
    { id: 5, label: 'Schedule Session', icon: Calendar, color: 'accent-rose' },
  ];

  const handleAction = (actionId) => {
    switch (actionId) {
      case 1:
        if (onViewPatient) onViewPatient();
        break;
      case 2:
        if (onAssignExercise) onAssignExercise();
        break;
      case 3:
        if (onGenerateReport) onGenerateReport();
        break;
      case 4:
        if (onStartConsultation) onStartConsultation();
        break;
      case 5:
        if (onScheduleSession) onScheduleSession();
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
