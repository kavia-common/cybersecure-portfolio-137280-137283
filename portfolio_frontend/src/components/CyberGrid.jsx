import React, { useMemo } from 'react';
import '../styles/cyber.css';

/**
 * PUBLIC_INTERFACE
 * CyberGrid - Fixed animated background with scanning lines and nodes.
 */
export default function CyberGrid() {
  const nodes = useMemo(() => {
    const arr = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      arr.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: `${(Math.random() * 2).toFixed(2)}s`,
      });
    }
    return arr;
  }, []);

  return (
    <>
      <div className="cyber-grid" aria-hidden="true" />
      <div className="cyber-nodes" aria-hidden="true">
        {nodes.map((n, i) => (
          <span
            className="cyber-node"
            key={i}
            style={{ left: `${n.left}%`, top: `${n.top}%`, animationDelay: n.animationDelay }}
          />
        ))}
      </div>
    </>
  );
}
