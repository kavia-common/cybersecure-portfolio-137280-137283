/**
 * PUBLIC_INTERFACE
 * getIcon - Returns an inline SVG icon by name.
 * Supported names: book, cert, shield, code, globe, language, award, briefcase, moon, sun, link, external
 */
export function getIcon(name, props = {}) {
  const size = props.size || 18;
  const stroke = props.stroke || 'currentColor';
  const strokeWidth = props.strokeWidth || 1.8;
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
    focusable: false,
    ...props,
  };

  switch (name) {
    case 'book':
      return (
        <svg {...common}><path d="M4 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13a.5.5 0 0 1-.8.4L14 17l-3.2 2.4a.5.5 0 0 1-.8-.4V6" stroke={stroke} strokeWidth={strokeWidth} /></svg>
      );
    case 'cert':
      return (
        <svg {...common}><circle cx="12" cy="9" r="4" stroke={stroke} strokeWidth={strokeWidth}/><path d="M8 15l-2 6 6-2 6 2-2-6" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    case 'shield':
      return (
        <svg {...common}><path d="M12 3l7 3v6c0 4.97-3.05 7.93-7 9-3.95-1.07-7-4.03-7-9V6l7-3z" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    case 'code':
      return (
        <svg {...common}><path d="M8 16l-4-4 4-4M16 8l4 4-4 4" stroke={stroke} strokeWidth={strokeWidth}/><path d="M14 4l-4 16" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    case 'globe':
      return (
        <svg {...common}><circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth={strokeWidth}/><path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    case 'language':
      return (
        <svg {...common}><path d="M3 5h8M7 5c0 7 8 7 8 14M11 9H3M21 19l-5-10-5 10M19.5 16h-7" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    case 'award':
      return (
        <svg {...common}><circle cx="12" cy="8" r="4" stroke={stroke} strokeWidth={strokeWidth}/><path d="M8 12l-2 8 6-3 6 3-2-8" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    case 'briefcase':
      return (
        <svg {...common}><rect x="3" y="7" width="18" height="12" rx="2" stroke={stroke} strokeWidth={strokeWidth}/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    case 'moon':
      return (
        <svg {...common}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    case 'sun':
      return (
        <svg {...common}><circle cx="12" cy="12" r="4" stroke={stroke} strokeWidth={strokeWidth}/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17L5 19" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    case 'link':
      return (
        <svg {...common}><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 1 0-7-7l-1 1" stroke={stroke} strokeWidth={strokeWidth}/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 1 0 7 7l1-1" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    case 'external':
      return (
        <svg {...common}><path d="M14 3h7v7M21 3l-8 8" stroke={stroke} strokeWidth={strokeWidth}/><path d="M5 21l8-8" stroke={stroke} strokeWidth={strokeWidth}/><rect x="3" y="7" width="10" height="14" rx="2" stroke={stroke} strokeWidth={strokeWidth}/></svg>
      );
    default:
      return null;
  }
}
