import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg bg-bg-surface hover:bg-bg-elevated border border-border-subtle hover:border-border-bright text-text-secondary hover:text-text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-indigo/50 active:scale-95 ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-accent-amber animate-spin-slow" />
      ) : (
        <Moon className="h-5 w-5 text-accent-indigo" />
      )}
    </button>
  );
};

export default ThemeToggle;
