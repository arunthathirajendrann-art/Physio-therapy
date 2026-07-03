import React from 'react';
import Card from '../components/Card';

export const RecoveryJournal = () => {
  return (
    <div className="space-y-6 text-left">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">Recovery Journal</h1>
        <p className="text-xs text-text-muted mt-1">Log physical sensations, stiffness levels, and recover milestones in text format.</p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12 text-center min-h-[300px]" glow glowColor="indigo">
        <div className="w-16 h-16 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-indigo text-2xl mb-4">
          📝
        </div>
        <h3 className="text-base font-bold text-text-primary">Notion-Style Recovery Logs</h3>
        <p className="text-xs text-text-muted max-w-sm mt-1">
          This rich-text journal page is scheduled for development in Phase 4. It will support markdown-style entries, sliders for pain levels, and bullet checklists.
        </p>
      </Card>
    </div>
  );
};

export default RecoveryJournal;
