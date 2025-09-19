import React from 'react';
import '../../styles/theme.css';
import '../../styles/layout.css';

/**
 * PUBLIC_INTERFACE
 * Footer - Simple footer with attribution and year
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <span>© {year} • Ocean Professional Cyber Portfolio</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}
