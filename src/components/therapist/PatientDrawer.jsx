import React from 'react';
import { X, Calendar, Activity, TrendingUp, FileText, Target, Clock, User, Mail } from 'lucide-react';
import Card, { CardTitle } from '../Card';
import Button from '../Button';

export const PatientDrawer = ({ 
  isOpen = false, 
  onClose, 
  patient = null 
}) => {
  if (!isOpen || !patient) return null;

  const defaultPatient = {
    name: 'Alex Rivera',
    age: 34,
    condition: 'Knee ACL Recovery',
    email: 'alex.rivera@email.com',
    phone: '+1 (555) 123-4567',
    recoveryScore: 78,
    painLevel: 3,
    startDate: 'Jan 15, 2026',
    targetDate: 'Mar 15, 2026',
    currentGoal: 'Achieve 120° knee flexion',
    doctorNotes: 'Patient showing excellent progress. Continue with current exercise regimen. Monitor pain levels during extension exercises.',
    recentSessions: [
      { date: 'Jun 28, 2026', type: 'Shoulder Abduction', duration: '45 min', pain: 3, recovery: 78 },
      { date: 'Jun 26, 2026', type: 'Knee Extension', duration: '40 min', pain: 4, recovery: 76 },
      { date: 'Jun 24, 2026', type: 'Hip Flexion', duration: '35 min', pain: 3, recovery: 74 },
    ],
    painHistory: [
      { date: 'Week 1', pain: 7 },
      { date: 'Week 2', pain: 6 },
      { date: 'Week 3', pain: 5 },
      { date: 'Week 4', pain: 4 },
      { date: 'Week 5', pain: 4 },
      { date: 'Week 6', pain: 3 },
      { date: 'Week 7', pain: 3 },
      { date: 'Week 8', pain: 3 },
    ],
    exercises: [
      { name: 'Shoulder Abduction', sets: 3, reps: 12, frequency: 'Daily' },
      { name: 'Knee Extension', sets: 3, reps: 10, frequency: 'Daily' },
      { name: 'Hip Flexion', sets: 2, reps: 15, frequency: 'Every other day' },
    ]
  };

  const patientData = patient || defaultPatient;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-bg-deep/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-lg h-full bg-bg-surface border-l border-border-subtle shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-bg-surface/95 backdrop-blur-md border-b border-border-subtle p-6 z-10">
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-lg font-bold text-text-primary">Patient Details</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>

          {/* Patient Profile */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-indigo font-bold text-xl">
              {patientData.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text-primary">{patientData.name}</h3>
              <p className="text-sm text-text-secondary">{patientData.condition}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-text-muted">
                <div className="flex items-center gap-1">
                  <User size={12} />
                  <span>{patientData.age} years</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail size={12} />
                  <span>{patientData.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Recovery Overview */}
          <Card className="p-4" glow glowColor="emerald">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-text-muted mb-1">
                  <Activity size={12} className="text-accent-emerald" />
                  <span>Recovery Score</span>
                </div>
                <div className="text-2xl font-bold text-text-primary font-mono">{patientData.recoveryScore}%</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs text-text-muted mb-1">
                  <TrendingUp size={12} className="text-accent-rose" />
                  <span>Pain Level</span>
                </div>
                <div className="text-2xl font-bold text-text-primary font-mono">{patientData.painLevel}/10</div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
              <Calendar size={12} />
              <span>Recovery Timeline</span>
            </div>
            <div className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-text-secondary">Started</span>
                <span className="text-text-primary font-medium">{patientData.startDate}</span>
              </div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-text-secondary">Target</span>
                <span className="text-text-primary font-medium">{patientData.targetDate}</span>
              </div>
              <div className="mt-3 h-2 bg-bg-elevated rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent-indigo to-accent-emerald rounded-full"
                  style={{ width: `${patientData.recoveryScore}%` }}
                />
              </div>
            </div>
          </div>

          {/* Current Goal */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
              <Target size={12} />
              <span>Current Goal</span>
            </div>
            <div className="p-4 rounded-xl bg-accent-indigo/5 border border-accent-indigo/20">
              <p className="text-sm text-text-primary">{patientData.currentGoal}</p>
            </div>
          </div>

          {/* Recent Sessions */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
              <Clock size={12} />
              <span>Recent Sessions</span>
            </div>
            <div className="space-y-2">
              {patientData.recentSessions.map((session, index) => (
                <div key={index} className="p-3 rounded-lg bg-bg-deep/50 border border-border-subtle">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-text-primary">{session.type}</span>
                    <span className="text-xs text-text-muted">{session.date}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-text-secondary">
                    <span>{session.duration}</span>
                    <span>Pain: {session.pain}/10</span>
                    <span>Recovery: {session.recovery}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pain History */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
              <Activity size={12} />
              <span>Pain History</span>
            </div>
            <div className="flex items-end gap-2 h-20">
              {patientData.painHistory.map((point, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full rounded-t transition-all duration-300"
                    style={{ 
                      height: `${(point.pain / 10) * 100}%`,
                      backgroundColor: point.pain >= 6 ? '#F43F5E' : point.pain >= 4 ? '#F59E0B' : '#10B981'
                    }}
                  />
                  <span className="text-[8px] text-text-muted mt-1">{point.date.split(' ')[1]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exercises */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
              <Activity size={12} />
              <span>Assigned Exercises</span>
            </div>
            <div className="space-y-2">
              {patientData.exercises.map((exercise, index) => (
                <div key={index} className="p-3 rounded-lg bg-bg-deep/50 border border-border-subtle">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text-primary">{exercise.name}</span>
                    <span className="text-xs text-text-muted">{exercise.frequency}</span>
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    {exercise.sets} sets × {exercise.reps} reps
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Notes */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
              <FileText size={12} />
              <span>Doctor Notes</span>
            </div>
            <div className="p-4 rounded-xl bg-bg-deep/50 border border-border-subtle">
              <p className="text-sm text-text-secondary leading-relaxed">{patientData.doctorNotes}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-border-subtle">
            <Button variant="primary" className="flex-1">
              View Full Profile
            </Button>
            <Button variant="secondary" className="flex-1">
              Edit Treatment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDrawer;
