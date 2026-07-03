import React from 'react';

export const Toggle = ({
  checked,
  onChange,
  label,
  description,
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <div className={`flex items-center justify-between gap-4 text-left ${className}`}>
      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && <span className="text-xs font-bold text-text-primary">{label}</span>}
          {description && <span className="text-[10px] text-text-muted">{description}</span>}
        </div>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-indigo/50 disabled:opacity-50 disabled:pointer-events-none
          ${checked ? 'bg-accent-indigo' : 'bg-bg-elevated'}`}
        {...props}
      >
        <span
          className={`pointer-events-none inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
            ${checked ? 'translate-x-4' : 'translate-x-0'}`}
        />
      </button>
    </div>
  );
};

export default Toggle;
