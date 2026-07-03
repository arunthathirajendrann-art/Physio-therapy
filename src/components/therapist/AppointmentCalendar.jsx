import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, Clock, CheckCircle2, XCircle, AlertCircle } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const AppointmentCalendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  
  const appointments = [
    { id: 1, date: 1, time: '09:00', patient: 'Alex Rivera', type: 'follow-up', status: 'completed' },
    { id: 2, date: 1, time: '11:00', patient: 'Sarah Chen', type: 'initial', status: 'completed' },
    { id: 3, date: 2, time: '10:00', patient: 'Michael Torres', type: 'follow-up', status: 'upcoming' },
    { id: 4, date: 3, time: '14:00', patient: 'Emily Watson', type: 'follow-up', status: 'upcoming' },
    { id: 5, date: 4, time: '09:30', patient: 'James Kim', type: 'follow-up', status: 'cancelled' },
    { id: 6, date: 5, time: '15:00', patient: 'Lisa Johnson', type: 'initial', status: 'upcoming' },
    { id: 7, date: 6, time: '11:30', patient: 'David Park', type: 'follow-up', status: 'upcoming' },
  ];

  const getAppointmentsForDate = (date) => {
    return appointments.filter(apt => apt.date === date);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'upcoming': return 'text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20';
      case 'cancelled': return 'text-accent-rose bg-accent-rose/10 border-accent-rose/20';
      default: return 'text-text-muted bg-bg-elevated border-border-subtle';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={12} />;
      case 'upcoming': return <Clock size={12} />;
      case 'cancelled': return <XCircle size={12} />;
      default: return <AlertCircle size={12} />;
    }
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-accent-indigo" />
            <CardTitle className="text-sm font-bold text-text-primary">Weekly Schedule</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded hover:bg-bg-elevated text-text-muted hover:text-text-primary">
              <ChevronLeft size={16} />
            </button>
            <span className="text-sm font-medium text-text-primary">June 2026</span>
            <button className="p-1 rounded hover:bg-bg-elevated text-text-muted hover:text-text-primary">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </CardHeader>

      {/* Calendar Grid */}
      <div className="flex-1">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days.map((day) => (
            <div key={day} className="text-center text-[10px] font-semibold text-text-muted uppercase tracking-wider py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Date Grid */}
        <div className="grid grid-cols-7 gap-1">
          {dates.map((date) => {
            const dayAppointments = getAppointmentsForDate(date);
            const isToday = date === 3;
            
            return (
              <div
                key={date}
                className={`min-h-[80px] p-2 rounded-lg border transition-all duration-200 ${
                  isToday 
                    ? 'bg-accent-indigo/10 border-accent-indigo' 
                    : 'bg-bg-surface border-border-subtle hover:border-border-bright'
                }`}
              >
                <div className={`text-sm font-bold mb-1 ${
                  isToday ? 'text-accent-indigo' : 'text-text-primary'
                }`}>
                  {date}
                </div>
                
                {dayAppointments.length > 0 && (
                  <div className="space-y-1">
                    {dayAppointments.slice(0, 2).map((apt) => (
                      <div
                        key={apt.id}
                        className={`p-1 rounded text-[9px] border ${getStatusColor(apt.status)}`}
                      >
                        <div className="flex items-center gap-1 truncate">
                          {getStatusIcon(apt.status)}
                          <span className="truncate">{apt.patient.split(' ')[0]}</span>
                        </div>
                        <div className="text-[8px] opacity-70">{apt.time}</div>
                      </div>
                    ))}
                    {dayAppointments.length > 2 && (
                      <div className="text-[8px] text-text-muted text-center">
                        +{dayAppointments.length - 2} more
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="pt-3 border-t border-border-subtle flex items-center justify-center gap-4 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-accent-emerald" />
          <span className="text-text-muted">Completed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-accent-indigo" />
          <span className="text-text-muted">Upcoming</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-accent-rose" />
          <span className="text-text-muted">Cancelled</span>
        </div>
      </div>
    </Card>
  );
};

export default AppointmentCalendar;
