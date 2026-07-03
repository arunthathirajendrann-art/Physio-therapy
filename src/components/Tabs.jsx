import React from 'react';

export const Tabs = ({
  tabs,
  activeTab,
  onChange,
  className = '',
  variant = 'underline'
}) => {
  const baseTabClass = "px-4 py-2 text-xs font-semibold tracking-wide border-b-2 transition-all duration-200 focus:outline-none";
  
  const variants = {
    underline: {
      container: "flex border-b border-border-subtle",
      active: "border-accent-indigo text-accent-indigo",
      inactive: "border-transparent text-text-secondary hover:text-text-primary hover:border-border-bright"
    },
    pill: {
      container: "flex gap-1.5 p-1 rounded-lg bg-bg-elevated border border-border-subtle",
      active: "bg-bg-surface text-accent-indigo shadow-sm border border-border-subtle",
      inactive: "text-text-secondary hover:text-text-primary border border-transparent"
    }
  };

  const selectedVariant = variants[variant];

  return (
    <div className={`${selectedVariant.container} ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={
              variant === 'underline' 
                ? `${baseTabClass} ${isActive ? selectedVariant.active : selectedVariant.inactive}`
                : `px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 focus:outline-none ${isActive ? selectedVariant.active : selectedVariant.inactive}`
            }
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
