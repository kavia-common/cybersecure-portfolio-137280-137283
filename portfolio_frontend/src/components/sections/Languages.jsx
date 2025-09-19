import React from 'react';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

export default function Languages({ items = [] }) {
  const norm = items.map(x => (typeof x === 'string' ? { name: x } : x));
  return (
    <div className="grid three" aria-label="Languages">
      {norm.map((l, idx) => (
        <div className="pill" key={idx}>
          {getIcon('globe', { size: 14 })}
          <span>{l.name}</span>
          {l.level ? <span style={{ color: 'var(--muted)' }}>• {l.level}</span> : null}
        </div>
      ))}
    </div>
  );
}
