import React from 'react';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

export default function Internships({ items = [] }) {
  return (
    <ul className="detail-list" role="list" aria-label="Internships">
      {items.map((job, idx) => (
        <li key={idx}>
          <div className="section-title">
            <strong>{job.role}</strong>
            <span style={{ color: 'var(--muted)', marginLeft: 8 }}>• {job.company}</span>
            <span style={{ color: 'var(--muted)', marginLeft: 8 }}>{job.start} – {job.end}</span>
          </div>
          <div>{job.summary}</div>
        </li>
      ))}
    </ul>
  );
}
