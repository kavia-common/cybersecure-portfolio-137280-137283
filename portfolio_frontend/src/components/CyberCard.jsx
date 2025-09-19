import React from 'react';
import '../styles/theme.css';
import '../styles/cyber.css';

/**
 * PUBLIC_INTERFACE
 * CyberCard - Reusable surface with cyber glow and subtle animated border.
 */
export default function CyberCard({ title, icon, children, footer, as: Tag = 'section', id, 'aria-labelledby': ariaLabelledby }) {
  return (
    <Tag id={id} aria-labelledby={ariaLabelledby} className="cyber-card" role="region">
      <div className="cyber-card__inner">
        {title && (
          <div className="cyber-card__header">
            {icon ? <span className="cyber-card__icon" aria-hidden="true">{icon}</span> : null}
            <h2 className="section-title">{title}</h2>
          </div>
        )}
        <div className="cyber-card__content">{children}</div>
        {footer ? <div className="cyber-card__footer">{footer}</div> : null}
      </div>
    </Tag>
  );
}
