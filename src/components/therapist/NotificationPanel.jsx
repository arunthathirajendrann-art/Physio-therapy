import React from 'react';
import { Bell, CheckCircle, AlertTriangle, XCircle, Clock, User } from'lucide-react';
import Card, { CardTitle, CardHeader } from '../Card';

export const NotificationPanel = ({ notifications = [] }) => {
  const defaultNotifications = [
    { id: 1, type: 'success', message: 'Alex Rivera completed today\'s session', patient: 'Alex Rivera', time: '2 min ago' },
    { id: 2, type: 'warning', message: 'Michael Torres pain level increased', patient: 'Michael Torres', time: '15 min ago' },
    { id: 3, type: 'success', message: 'Sarah Chen reached recovery milestone', patient: 'Sarah Chen', time: '1 hour ago' },
    { id: 4, type: 'error', message: 'James Kim missed scheduled session', patient: 'James Kim', time: '2 hours ago' },
    { id: 5, type: 'info', message: 'Emily Watson scheduled new appointment', patient: 'Emily Watson', time: '3 hours ago' },
    { id: 6, type: 'success', message: 'Lisa Johnson improved ROM by 12°', patient: 'Lisa Johnson', time: '4 hours ago' },
  ];

  const notificationData = notifications.length > 0 ? notifications : defaultNotifications;

  const getNotificationStyle = (type) => {
    switch (type) {
      case 'success':
        return {
          icon: <CheckCircle size={14} className="text-accent-emerald" />,
          bg: 'bg-accent-emerald/10 border-accent-emerald/20',
          dot: 'bg-accent-emerald'
        };
      case 'warning':
        return {
          icon: <AlertTriangle size={14} className="text-accent-amber" />,
          bg: 'bg-accent-amber/10 border-accent-amber/20',
          dot: 'bg-accent-amber'
        };
      case 'error':
        return {
          icon: <XCircle size={14} className="text-accent-rose" />,
          bg: 'bg-accent-rose/10 border-accent-rose/20',
          dot: 'bg-accent-rose'
        };
      case 'info':
        return {
          icon: <Clock size={14} className="text-accent-indigo" />,
          bg: 'bg-accent-indigo/10 border-accent-indigo/20',
          dot: 'bg-accent-indigo'
        };
      default:
        return {
          icon: <Bell size={14} className="text-text-muted" />,
          bg: 'bg-bg-elevated border-border-subtle',
          dot: 'bg-text-muted'
        };
    }
  };

  return (
    <Card className="flex flex-col text-left" glow glowColor="indigo">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo">
              <Bell size={14} />
            </div>
            <CardTitle className="text-sm font-bold text-text-primary">Recent Alerts</CardTitle>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-accent-indigo/10 text-accent-indigo text-[10px] font-semibold">
            {notificationData.length}
          </span>
        </div>
      </CardHeader>

      <div className="space-y-2 flex-1 overflow-y-auto max-h-[400px]">
        {notificationData.map((notification) => {
          const style = getNotificationStyle(notification.type);
          
          return (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border ${style.bg} hover:border-border-bright transition-all duration-200`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  {style.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-text-primary leading-relaxed mb-1">
                    {notification.message}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-text-muted">
                    <div className="flex items-center gap-1">
                      <User size={10} />
                      <span>{notification.patient}</span>
                    </div>
                    <span>•</span>
                    <span>{notification.time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-border-subtle mt-3">
        <button className="w-full text-xs text-text-secondary hover:text-text-primary transition-colors">
          View All Notifications
        </button>
      </div>
    </Card>
  );
};

export default NotificationPanel;
