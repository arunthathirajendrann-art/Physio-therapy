import React from 'react';
import Card from '../components/Card';

export const PlanBuilder = () => {
  return (
    <div className="space-y-6 text-left">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">Plan Builder</h1>
        <p className="text-xs text-text-muted mt-1">Design customized rehabilitation routines with specific ROM targets.</p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12 text-center min-h-[300px]" glow glowColor="emerald">
        <div className="w-16 h-16 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center text-accent-emerald text-2xl mb-4">
          🛠️
        </div>
        <h3 className="text-base font-bold text-text-primary">Prescription Workspace</h3>
        <p className="text-xs text-text-muted max-w-sm mt-1">
          This treatment builder is scheduled for development in Phase 6. It will feature custom notion blocks, exercise libraries, and parameter sliders (hold counts, sets).
        </p>
      </Card>
    </div>
  );
};

export default PlanBuilder;
