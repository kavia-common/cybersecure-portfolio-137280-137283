import React from 'react';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

/**
 * PUBLIC_INTERFACE
 * Publications - Renders list of publications with venue and date.
 */
export default function Publications({ items = [] }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <ul className="detail-list" role="list" aria-label="Publications">
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
  );
}
