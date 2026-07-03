import React from 'react';

export const Card = ({
  children,
  className = '',
  glow = false,
  glowColor = 'indigo',
  hoverable = false,
  onClick,
  ...props
}) => {
  const glowStyles = {
    indigo: 'shadow-glass-indigo border-accent-indigo/20',
    emerald: 'shadow-glass-emerald border-accent-emerald/20',
    rose: 'shadow-glass-rose border-accent-rose/20',
  };

  const baseStyle = 'glass-panel rounded-2xl overflow-hidden p-6 transition-all duration-300';
  const hoverStyle = hoverable ? 'hover:shadow-glass hover:border-border-bright cursor-pointer active:scale-[0.99]' : '';
  const activeGlow = glow ? glowStyles[glowColor] : 'shadow-glass';

  return (
    <div
      onClick={onClick}
      className={`${baseStyle} ${activeGlow} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`flex items-center justify-between border-b border-border-subtle pb-4 mb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-base font-semibold tracking-tight text-text-primary ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-xs text-text-muted ${className}`}>
    {children}
  </p>
);

export default Card;
