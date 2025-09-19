import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { getIcon } from '../utils/icons';
import '../styles/theme.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      className="btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? getIcon('sun') : getIcon('moon')}
      <span>{isDark ? 'Light' : 'Dark'} mode</span>
    </button>
  );
}
