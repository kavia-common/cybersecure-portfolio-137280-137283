import React from 'react';
import '../../styles/theme.css';

export default function Container({ children }) {
  return <div className="container" role="main">{children}</div>;
}
