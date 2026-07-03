import React, { useState } from 'react';
import Toggle from '../../components/Toggle';

const NotificationSettings = () => {
  const [state, setState] = useState({
    exercise: true,
    appointment: true,
    weekly: false,
    aiTips: true,
    recovery: true,
    therapist: true,
    email: true,
    push: true,
    sms: false,
  });

  const toggle = (key) => setState((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div className="space-y-3">
      <Toggle label="Exercise Reminder" checked={state.exercise} onChange={() => toggle('exercise')} />
      <Toggle label="Appointment Reminder" checked={state.appointment} onChange={() => toggle('appointment')} />
      <Toggle label="Weekly Reports" checked={state.weekly} onChange={() => toggle('weekly')} />
      <Toggle label="AI Coach Tips" checked={state.aiTips} onChange={() => toggle('aiTips')} />
      <Toggle label="Recovery Alerts" checked={state.recovery} onChange={() => toggle('recovery')} />
      <Toggle label="Therapist Messages" checked={state.therapist} onChange={() => toggle('therapist')} />
      <hr className="border-border-subtle" />
      <Toggle label="Email Notifications" checked={state.email} onChange={() => toggle('email')} />
      <Toggle label="Push Notifications" checked={state.push} onChange={() => toggle('push')} />
      <Toggle label="SMS Notifications" checked={state.sms} onChange={() => toggle('sms')} />
    </div>
  );
};

export default NotificationSettings;
