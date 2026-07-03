import React, { useState } from 'react';
import { Search, Filter, Calendar, Clock, Target, Activity, CheckCircle2, XCircle } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';
import Button from '../Button';

export const SessionHistory = ({ sessions = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const defaultSessions = [
    { id: 1, date: 'Jun 28, 2026', exercise: 'Shoulder Abduction', duration: '45 min', accuracy: 94, pain: 3, recovery: 89, status: 'completed' },
    { id: 2, date: 'Jun 26, 2026', exercise: 'Knee Extension', duration: '40 min', accuracy: 91, pain: 4, recovery: 87, status: 'completed' },
    { id: 3, date: 'Jun 24, 2026', exercise: 'Hip Flexion', duration: '35 min', accuracy: 89, pain: 3, recovery: 85, status: 'completed' },
    { id: 4, date: 'Jun 22, 2026', exercise: 'Ankle Dorsiflexion', duration: '30 min', accuracy: 92, pain: 4, recovery: 83, status: 'completed' },
    { id: 5, date: 'Jun 20, 2026', exercise: 'Core Stability', duration: '38 min', accuracy: 87, pain: 3, recovery: 81, status: 'completed' },
    { id: 6, date: 'Jun 18, 2026', exercise: 'Wrist Rotation', duration: '25 min', accuracy: 95, pain: 2, recovery: 78, status: 'completed' },
    { id: 7, date: 'Jun 16, 2026', exercise: 'Shoulder Flexion', duration: '42 min', accuracy: 88, pain: 4, recovery: 75, status: 'completed' },
    { id: 8, date: 'Jun 14, 2026', exercise: 'Knee Flexion', duration: '36 min', accuracy: 90, pain: 5, recovery: 72, status: 'completed' },
  ];

  const sessionData = sessions.length > 0 ? sessions : defaultSessions;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'cancelled':
        return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      case 'missed':
        return 'text-accent-amber bg-accent-amber/10 border-accent-amber/20';
      default:
        return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={14} className="text-accent-emerald" />;
      case 'cancelled': return <XCircle size={14} className="text-accent-rose" />;
      default: return <Clock size={14} className="text-text-muted" />;
    }
  };

  const filteredSessions = sessionData.filter(session => {
    const matchesSearch = session.exercise.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.date.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || session.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <Card className="flex flex-col text-left" glow={false}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold text-text-primary flex items-center gap-2">
            <Calendar size={16} className="text-accent-indigo" />
            Session History
          </CardTitle>
          <span className="px-2 py-0.5 rounded-full bg-accent-indigo/10 text-accent-indigo text-[10px] font-semibold">
            {sessionData.length}
          </span>
        </div>
      </CardHeader>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search sessions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-bg-surface border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-border-bright text-text-primary placeholder:text-text-muted"
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-bg-surface border border-border-subtle rounded-lg text-sm focus:outline-none focus:border-border-bright text-text-primary"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="missed">Missed</option>
          </select>
          <Button variant="secondary" size="sm" className="gap-1.5">
            <Filter size={14} />
            <span className="hidden sm:inline">Filter</span>
          </Button>
        </div>
      </div>

      {/* Session List */}
      <div className="space-y-2 flex-1 overflow-y-auto max-h-[400px]">
        {filteredSessions.map((session) => (
          <div
            key={session.id}
            className="p-3 rounded-lg bg-bg-deep/50 border border-border-subtle hover:border-border-bright transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {getStatusIcon(session.status)}
                  <h4 className="text-sm font-semibold text-text-primary">{session.exercise}</h4>
                </div>
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{session.duration}</span>
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-[10px] font-semibold border ${getStatusBadge(session.status)}`}>
                {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="bg-bg-surface/50 rounded-lg p-2">
                <div className="flex items-center gap-1 text-[10px] text-text-muted mb-1">
                  <Target size={10} />
                  <span>Accuracy</span>
                </div>
                <div className="text-sm font-bold text-text-primary font-mono">{session.accuracy}%</div>
              </div>
              <div className="bg-bg-surface/50 rounded-lg p-2">
                <div className="flex items-center gap-1 text-[10px] text-text-muted mb-1">
                  <Activity size={10} />
                  <span>Pain</span>
                </div>
                <div className="text-sm font-bold text-text-primary font-mono">{session.pain}/10</div>
              </div>
              <div className="bg-bg-surface/50 rounded-lg p-2">
                <div className="flex items-center gap-1 text-[10px] text-text-muted mb-1">
                  <Activity size={10} />
                  <span>Recovery</span>
                </div>
                <div className="text-sm font-bold text-text-primary font-mono">{session.recovery}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3 flex items-center justify-between">
        <div className="text-xs text-text-muted">
          Showing {filteredSessions.length} of {sessionData.length} sessions
        </div>
        <Button variant="ghost" size="sm" className="text-xs">
          View All Sessions
        </Button>
      </div>
    </Card>
  );
};

export default SessionHistory;
