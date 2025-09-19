import React from 'react';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

export default function Certifications({ items = [] }) {
  return (
    <div className="grid two" aria-label="Certifications">
      {items.map((c, idx) => (
        <div className="pill" key={idx} aria-label={`${c.name} by ${c.issuer}${c.year ? ' ' + c.year : ''}`}>
          {getIcon('cert', { size: 14 })}
          <span>{c.name}</span>
          <span style={{ color: 'var(--muted)' }}>• {c.issuer}</span>
          {c.year ? <span style={{ color: 'var(--muted)' }}>• {c.year}</span> : null}
        </div>
      ))}
    </div>
  );
}
