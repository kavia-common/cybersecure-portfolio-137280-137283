import React from 'react';
import CyberCard from '../CyberCard';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

export default function Internships({ items = [] }) {
  return (
    <CyberCard id="internships" aria-labelledby="internships-title" title="Internships" icon={getIcon('briefcase')}>
      <ul className="detail-list" role="list">
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
    </CyberCard>
  );
}
