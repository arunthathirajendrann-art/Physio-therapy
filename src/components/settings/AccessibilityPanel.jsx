import React from 'react';
import Toggle from '../../components/Toggle';

const AccessibilityPanel = () => {
  return (
    <div className="space-y-3">
      <Toggle label="Large Text" checked={false} onChange={() => {}} />
      <Toggle label="High Contrast" checked={false} onChange={() => {}} />
      <Toggle label="Voice Assistance" checked={false} onChange={() => {}} />
      <Toggle label="Keyboard Navigation" checked={true} onChange={() => {}} />
      <Toggle label="Reduced Motion" checked={false} onChange={() => {}} />
      <Toggle label="Color Blind Support" checked={true} onChange={() => {}} />
    </div>
  );
};

export default AccessibilityPanel;
