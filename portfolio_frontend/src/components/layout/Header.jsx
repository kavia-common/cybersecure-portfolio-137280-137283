import React from 'react';
import { getIcon } from '../../utils/icons';
import '../../styles/theme.css';
import '../../styles/components.css';

function LinkItem({ href, children }) {
  return (
    <a className="pill" href={href} target="_blank" rel="noopener noreferrer">
      {getIcon('external', { size: 14 })}{children}
    </a>
  );
}

/**
 * PUBLIC_INTERFACE
 * Header - Displays name, role, summary, and quick links with theme toggle slot.
 * For this deployment, we prefer showing an explicit name if provided by the user request.
 */
export default function Header({ basic, themeButton }) {
  // Force-show provided name if present in basic; fallback maintained.
  const displayName = basic?.name || 'Your Name';
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div className="header-main">
          <div className="avatar" aria-hidden="true">🔐</div>
          <div className="title-wrap">
            <h1 className="title">{displayName}</h1>
            <p className="subtitle">
              <span className="cyber-text cyber-text--accent">{basic?.role || 'Security Professional'}</span>
              <span className="cyber-text__cursor" aria-hidden="true"></span>
            </p>
            {basic?.summary ? <p className="summary">{basic.summary}</p> : null}
            <div className="quick">
              {basic?.links?.filter(l => !!l?.url).map((l, i) => (
                <LinkItem key={i} href={l.url}>{l.label}</LinkItem>
              ))}
            </div>
          </div>
        </div>
        <div className="header-actions">
          {themeButton}
        </div>
      </div>
    </header>
  );
}
