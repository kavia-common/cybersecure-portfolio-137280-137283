import React from 'react';
import CyberCard from '../CyberCard';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

export default function Participation({ items = [] }) {
  return (
    <CyberCard id="participation" aria-labelledby="participation-title" title="Participation" icon={getIcon('shield')}>
      <ul className="detail-list" role="list">
        {items.map((p, idx) => (
          <li key={idx}>
            <div className="section-title">
              <strong>{p.title}</strong>
              <span style={{ color: 'var(--muted)', marginLeft: 8 }}>• {p.org}</span>
              {p.year ? <span style={{ color: 'var(--muted)', marginLeft: 8 }}>{p.year}</span> : null}
            </div>
            {p.details ? <div style={{ color: 'var(--text)' }}>{p.details}</div> : null}
          </li>
        ))}
      </ul>
    </CyberCard>
  );
}
