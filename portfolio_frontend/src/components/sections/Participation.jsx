import React from 'react';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

export default function Participation({ items = [] }) {
  return (
    <ul className="detail-list" role="list" aria-label="Participation list">
      {items.map((p, idx) => {
        if (Array.isArray(p.profiles)) {
          return (
            <li key={idx}>
              <div className="section-title">
                <strong>{p.title || 'Profiles'}</strong>
                {p.org ? <span style={{ color: 'var(--muted)', marginLeft: 8 }}>• {p.org}</span> : null}
              </div>
              <div className="grid three">
                {p.profiles.map((prof, i) => (
                  <a
                    className="pill"
                    key={i}
                    href={prof.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${prof.site}${prof.url ? ' profile' : ''}`}
                    onClick={e => { if (!prof.url) e.preventDefault(); }}
                    title={prof.url ? prof.url : 'Link not provided'}
                  >
                    {getIcon('external', { size: 14 })}
                    <span>{prof.site}</span>
                  </a>
                ))}
              </div>
            </li>
          );
        }

        return (
          <li key={idx}>
            <div className="section-title">
              <strong>{p.title}</strong>
              {p.org ? <span style={{ color: 'var(--muted)', marginLeft: 8 }}>• {p.org}</span> : null}
              {p.year ? <span style={{ color: 'var(--muted)', marginLeft: 8 }}>{p.year}</span> : null}
            </div>
            {p.details ? <div style={{ color: 'var(--text)' }}>{p.details}</div> : null}
          </li>
        );
      })}
    </ul>
  );
}
