import React from 'react';

const SupportPanel = () => {
  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold">Help Center</div>
      <div className="text-sm font-semibold">FAQ</div>
      <div className="text-sm font-semibold">Contact Support</div>
      <div className="text-sm font-semibold">Report Bug</div>
      <div className="text-sm font-semibold">Feedback</div>
      <div className="text-xs text-text-muted mt-2">Terms • Privacy Policy</div>
      <div className="text-xs text-text-muted">App Version 1.0.0</div>
    </div>
  );
};

export default SupportPanel;
