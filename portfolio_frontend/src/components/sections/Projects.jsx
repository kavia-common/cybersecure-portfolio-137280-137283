import React from 'react';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

/**
 * PUBLIC_INTERFACE
 * Projects - Displays project tags; groups by area as pills.
 */
export default function Projects({ items = [] }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <div className="grid three" aria-label="Projects">
      {items.map((proj, idx) => (
        <div className="pill" key={idx} title={proj.area ? `${proj.name} • ${proj.area}` : proj.name}>
          {getIcon('link', { size: 14 })}
          <span>{proj.name}</span>
          {proj.area ? <span style={{ color: 'var(--muted)' }}>• {proj.area}</span> : null}
        </div>
      ))}
    </div>
  );
}
