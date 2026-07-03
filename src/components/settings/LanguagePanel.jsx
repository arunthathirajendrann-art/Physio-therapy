import React from 'react';

const LanguagePanel = () => {
  return (
    <div className="space-y-3">
      <div>
        <div className="text-sm font-semibold">Language</div>
        <div className="text-xs text-text-muted">English (United States)</div>
      </div>
      <div>
        <div className="text-sm font-semibold">Timezone</div>
        <div className="text-xs text-text-muted">UTC+05:30 (India Standard Time)</div>
      </div>
      <div>
        <div className="text-sm font-semibold">Units</div>
        <div className="text-xs text-text-muted">Metric (cm, kg)</div>
      </div>
    </div>
  );
};

export default LanguagePanel;
