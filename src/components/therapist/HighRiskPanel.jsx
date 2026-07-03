import React from 'react';
import { AlertTriangle, Eye, MessageSquare, Clock } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';
import Button from '../Button';

export const HighRiskPanel = ({ patients = [], onPatientView, onPatientContact }) => {
  const defaultPatients = [
    { 
      id: 1, 
      name: 'Michael Torres', 
      condition: 'Lower Back Strain', 
      painLevel: 7, 
      recoveryScore: 45, 
      alert: 'Pain level increased by 2 points this week',
      lastSession: '2 days ago',
      initials: 'MT'
    },
    { 
      id: 2, 
      name: 'Sarah Chen', 
      condition: 'Shoulder Rotator Cuff', 
      painLevel: 5, 
      recoveryScore: 62, 
      alert: 'Missed last 2 sessions',
      lastSession: '5 days ago',
      initials: 'SC'
    },
    { 
      id: 3, 
      name: 'Robert Kim', 
      condition: 'Knee ACL Recovery', 
      painLevel: 6, 
      recoveryScore: 38, 
      alert: 'Recovery score dropped by 8%',
      lastSession: '1 day ago',
      initials: 'RK'
    },
  ];

  const highRiskPatients = patients.length > 0 ? patients : defaultPatients;

  const getRiskColor = (painLevel) => {
    if (painLevel >= 7) return 'bg-accent-rose/10 border-accent-rose/20 text-accent-rose';
    if (painLevel >= 5) return 'bg-accent-amber/10 border-accent-amber/20 text-accent-amber';
    return 'bg-accent-indigo/10 border-accent-indigo/20 text-accent-indigo';
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="rose">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-accent-rose/10 border border-accent-rose/20 text-accent-rose">
              <AlertTriangle size={14} />
            </div>
            <CardTitle className="text-sm font-bold text-text-primary">High Risk Patients</CardTitle>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-accent-rose/10 text-accent-rose text-[10px] font-semibold">
            {highRiskPatients.length}
          </span>
        </div>
      </CardHeader>

      <div className="space-y-3 flex-1">
        {highRiskPatients.map((patient) => (
          <div
            key={patient.id}
            className={`p-3 rounded-xl border ${getRiskColor(patient.painLevel)} hover:border-border-bright transition-all duration-200`}
          >
            {/* Patient Header */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bg-surface border border-border-subtle flex items-center justify-center font-bold text-sm text-text-primary">
                  {patient.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">{patient.name}</h4>
                  <p className="text-[10px] text-text-secondary">{patient.condition}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-xs">
                  <Clock size={10} className="text-text-muted" />
                  <span className="text-text-muted">{patient.lastSession}</span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="bg-bg-surface/50 rounded-lg p-2">
                <div className="text-[9px] text-text-muted uppercase tracking-wider">Pain Level</div>
                <div className="text-lg font-bold text-text-primary font-mono">{patient.painLevel}/10</div>
              </div>
              <div className="bg-bg-surface/50 rounded-lg p-2">
                <div className="text-[9px] text-text-muted uppercase tracking-wider">Recovery</div>
                <div className="text-lg font-bold text-text-primary font-mono">{patient.recoveryScore}%</div>
              </div>
            </div>

            {/* Alert Message */}
            <div className="mb-3 p-2 rounded-lg bg-bg-surface/70 border border-border-subtle">
              <p className="text-[10px] text-text-secondary leading-relaxed">{patient.alert}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onPatientView && onPatientView(patient)}
                className="flex-1 gap-1.5 text-xs"
              >
                <Eye size={12} />
                Quick View
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onPatientContact && onPatientContact(patient)}
                className="flex-1 gap-1.5 text-xs"
              >
                <MessageSquare size={12} />
                Contact
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <Button variant="ghost" size="sm" className="w-full text-xs text-text-secondary hover:text-text-primary">
          View All High Risk Patients
        </Button>
      </div>
    </Card>
  );
};

export default HighRiskPanel;
