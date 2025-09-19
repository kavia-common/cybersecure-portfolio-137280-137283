import React from 'react';
import CyberCard from '../CyberCard';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

/**
 * PUBLIC_INTERFACE
 * Projects - Displays project tags; groups by area as pills.
 */
export default function Projects({ items = [] }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <CyberCard id="projects" aria-labelledby="projects-title" title="Projects" icon={getIcon('code')}>
      <div className="grid three">
        {items.map((proj, idx) => (
          <div className="pill" key={idx} title={proj.area ? `${proj.name} • ${proj.area}` : proj.name}>
            {getIcon('link', { size: 14 })}
            <span>{proj.name}</span>
            {proj.area ? <span style={{ color: 'var(--muted)' }}>• {proj.area}</span> : null}
          </div>
        ))}
      </div>
    </CyberCard>
  );
}
