import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-indigo/50 disabled:opacity-50 disabled:pointer-events-none rounded-lg';
  
  const variants = {
    primary: 'bg-accent-indigo hover:bg-accent-indigo/90 text-white shadow-lg shadow-accent-indigo/25 hover:shadow-accent-indigo/35 active:scale-95',
    secondary: 'bg-bg-elevated hover:bg-bg-elevated/80 border border-border-subtle hover:border-border-bright text-text-primary active:scale-95',
    ghost: 'hover:bg-bg-elevated text-text-secondary hover:text-text-primary',
    danger: 'bg-accent-rose hover:bg-accent-rose/90 text-white shadow-lg shadow-accent-rose/25 hover:shadow-accent-rose/35 active:scale-95',
    emerald: 'bg-accent-emerald hover:bg-accent-emerald/90 text-white shadow-lg shadow-accent-emerald/25 hover:shadow-accent-emerald/35 active:scale-95',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    icon: 'p-2 rounded-full',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
