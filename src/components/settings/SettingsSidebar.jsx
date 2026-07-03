import React from 'react';

const SettingsSidebar = ({ sections = [], value, onChange }) => {
  return (
    <aside className="space-y-2 sticky top-8">
      <div className="glass-panel p-4 rounded-2xl">
        <h3 className="text-sm font-semibold text-text-primary mb-3">Settings</h3>
        <nav className="flex flex-col gap-1">
          {sections.map((s) => {
            const active = s === value;
            return (
              <button
                key={s}
                onClick={() => onChange(s)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-3 ${
                  active
                    ? 'bg-accent-indigo/10 text-accent-indigo font-semibold ring-1 ring-accent-indigo/20'
                    : 'text-text-muted hover:bg-bg-elevated'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${active ? 'bg-accent-indigo' : 'bg-border-subtle'}`} />
                <span className="text-sm">{s}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default SettingsSidebar;
