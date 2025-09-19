import React from 'react';
import CyberCard from '../CyberCard';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

export default function Languages({ items = [] }) {
  const norm = items.map(x => (typeof x === 'string' ? { name: x } : x));
  return (
    <CyberCard id="languages" aria-labelledby="languages-title" title="Languages" icon={getIcon('language')}>
      <div className="grid three">
        {norm.map((l, idx) => (
          <div className="pill" key={idx}>
            {getIcon('globe', { size: 14 })}
            <span>{l.name}</span>
            {l.level ? <span style={{ color: 'var(--muted)' }}>• {l.level}</span> : null}
          </div>
        ))}
      </div>
    </CyberCard>
  );
}
