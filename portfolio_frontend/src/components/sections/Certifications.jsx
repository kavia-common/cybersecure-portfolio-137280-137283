import React from 'react';
import CyberCard from '../CyberCard';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

export default function Certifications({ items = [] }) {
  return (
    <CyberCard id="certifications" aria-labelledby="certifications-title" title="Certifications" icon={getIcon('award')}>
      <div className="grid two">
        {items.map((c, idx) => (
          <div className="pill" key={idx} aria-label={`${c.name} by ${c.issuer}${c.year ? ' ' + c.year : ''}`}>
            {getIcon('cert', { size: 14 })}
            <span>{c.name}</span>
            <span style={{ color: 'var(--muted)' }}>• {c.issuer}</span>
            {c.year ? <span style={{ color: 'var(--muted)' }}>• {c.year}</span> : null}
          </div>
        ))}
      </div>
    </CyberCard>
  );
}
