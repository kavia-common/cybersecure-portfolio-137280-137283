import React from 'react';
import CyberCard from '../CyberCard';
import '../../styles/components.css';

export default function Interests({ items = [] }) {
  return (
    <CyberCard id="interests" aria-labelledby="interests-title" title="Interests">
      <div className="grid three">
        {items.map((interest, idx) => (
          <div className="pill" key={idx}>
            <span className="cyber-text cyber-text--green">{interest}</span>
          </div>
        ))}
      </div>
    </CyberCard>
  );
}
