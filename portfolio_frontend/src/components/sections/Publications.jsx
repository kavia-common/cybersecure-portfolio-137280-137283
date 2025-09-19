import React from 'react';
import CyberCard from '../CyberCard';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

/**
 * PUBLIC_INTERFACE
 * Publications - Renders list of publications with venue and date.
 */
export default function Publications({ items = [] }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <CyberCard id="publications" aria-labelledby="publications-title" title="Publications" icon={getIcon('book')}>
      <ul className="detail-list" role="list">
        {items.map((p, idx) => (
          <li key={idx}>
            <div className="section-title">
              <strong>{p.title}</strong>
              {p.venue ? <span style={{ color: 'var(--muted)', marginLeft: 8 }}>• {p.venue}</span> : null}
              {p.date ? <span style={{ color: 'var(--muted)', marginLeft: 8 }}>{p.date}</span> : null}
            </div>
          </li>
        ))}
      </ul>
    </CyberCard>
  );
}
