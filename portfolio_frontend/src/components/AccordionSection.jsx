import React, { useState, useId, useCallback } from 'react';
import '../styles/theme.css';
import '../styles/components.css';

/**
 * PUBLIC_INTERFACE
 * AccordionSection - Accessible collapsible section wrapper with cyber styling.
 * Props:
 * - title: string | ReactNode - header/trigger label
 * - icon: ReactNode - optional icon to show near title
 * - defaultOpen: boolean - initial open state (default: false)
 * - allowMultipleOpen: boolean - not used in this local component, the parent can manage if needed
 * - onToggle: (open:boolean) => void - callback when toggled
 * - children: ReactNode - collapsible content
 */
export default function AccordionSection({ title, icon, defaultOpen = false, onToggle, children }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const sectionId = useId();
  const contentId = `${sectionId}-content`;
  const headerId = `${sectionId}-header`;

  const handleToggle = useCallback(() => {
    setOpen(prev => {
      const next = !prev;
      if (onToggle) onToggle(next);
      return next;
    });
  }, [onToggle]);

  return (
    <section className={`cyber-card accordion-section ${open ? 'is-open' : 'is-closed'}`} aria-labelledby={headerId} role="region">
      <div className="cyber-card__inner">
        <div className="cyber-card__header">
          <button
            id={headerId}
            className="accordion-trigger btn btn-ghost"
            aria-expanded={open}
            aria-controls={contentId}
            onClick={handleToggle}
          >
            <span className="accordion-trigger__icon" aria-hidden="true">{icon || null}</span>
            <span className="section-title">{title}</span>
            <span className="accordion-trigger__caret" aria-hidden="true">{open ? '▾' : '▸'}</span>
          </button>
        </div>
        <div
          id={contentId}
          className="accordion-content"
          role="region"
          aria-hidden={!open}
        >
          <div className="cyber-card__content">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
