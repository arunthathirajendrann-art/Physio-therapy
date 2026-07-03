import React from 'react';

export const Input = React.forwardRef(({
  label,
  type = 'text',
  placeholder = '',
  error = '',
  helperText = '',
  icon: Icon,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full text-left ${className}`}>
      {label && (
        <label className="text-xs font-semibold tracking-wide text-text-secondary">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3 text-text-muted pointer-events-none">
            <Icon size={18} />
          </div>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`w-full px-3 py-2 text-sm bg-bg-surface border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-indigo/50 transition-all duration-200
            ${Icon ? 'pl-10' : 'pl-3'}
            ${error 
              ? 'border-accent-rose focus:ring-accent-rose/50' 
              : 'border-border-subtle focus:border-border-bright text-text-primary'
            }
            placeholder:text-text-muted disabled:opacity-50`}
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs text-accent-rose font-medium mt-0.5">
          {error}
        </span>
      )}
      {!error && helperText && (
        <span className="text-xs text-text-muted mt-0.5">
          {helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
