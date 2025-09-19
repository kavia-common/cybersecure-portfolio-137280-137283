import React from 'react';
import '../../styles/components.css';

export default function Interests({ items = [] }) {
  return (
    <div className="grid three" aria-label="Interests">
      {items.map((interest, idx) => (
        <div className="pill" key={idx}>
          <span className="cyber-text cyber-text--green">{interest}</span>
        </div>
      ))}
    </div>
  );
}
