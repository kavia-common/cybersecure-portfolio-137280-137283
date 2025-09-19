import React from 'react';
import CyberCard from '../CyberCard';
import { getIcon } from '../../utils/icons';
import '../../styles/components.css';

export default function Participation({ items = [] }) {
  return (
    <CyberCard id="participation" aria-labelledby="participation-title" title="Participation" icon={getIcon('shield')}>
      <ul className="detail-list" role="list">
        {items.map((p, idx) => {
          // Support profile entries (e.g., picoCTF, TryHackMe)
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

          // Default rendering for participation items
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
    </CyberCard>
  );
}
