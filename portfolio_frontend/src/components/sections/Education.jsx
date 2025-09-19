import React from 'react';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

export default function Education({ items = [] }) {
  return (
    <ul className="detail-list" role="list" aria-label="Education list">
      {items.map((ed, idx) => (
        <li key={idx}>
          <div className="section-title" id={`edu-${idx}`}>
            <strong>{ed.degree}</strong>
            <span style={{ color: 'var(--muted)', marginLeft: 8 }}>• {ed.school}</span>
            <span style={{ color: 'var(--muted)', marginLeft: 8 }}>{ed.start} – {ed.end}</span>
          </div>
          {ed.focus ? <div style={{ color: 'var(--text)' }}>Focus: <span className="cyber-text--accent">{ed.focus}</span></div> : null}
          {Array.isArray(ed.notes) && ed.notes.length > 0 ? (
            <ul className="detail-list">
              {ed.notes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
