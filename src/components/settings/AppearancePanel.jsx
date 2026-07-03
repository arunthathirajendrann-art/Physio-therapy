import React from 'react';
import { Button } from '../../components/Button';

const AppearancePanel = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button size="sm" variant="secondary">Light</Button>
        <Button size="sm" variant="ghost">Dark</Button>
        <Button size="sm">System</Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 glass-panel rounded-xl">
          <div className="text-sm font-semibold">Accent Color</div>
          <div className="text-xs text-text-muted">Choose a color</div>
        </div>
        <div className="p-3 glass-panel rounded-xl">
          <div className="text-sm font-semibold">Card Style</div>
          <div className="text-xs text-text-muted">Rounded / Compact</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">Animations</div>
          <div className="text-xs text-text-muted">Enable smooth UI animations</div>
        </div>
        <Button size="sm" variant="ghost">Toggle</Button>
      </div>
    </div>
  );
};

export default AppearancePanel;
