# Cybersecurity-Themed Portfolio (Ocean Professional)

A modern React portfolio with a cybersecurity aesthetic: animated green scanning lines, card-based sections, and dynamic rendering from a resume JSON file. Minimal dependencies: React + vanilla CSS.

## Highlights
- Ocean Professional theme (blue/amber accents) via CSS variables
- Animated CyberGrid background with subtle glow and nodes
- Reusable visual primitives: CyberCard and CyberText classes
- Dynamic sections: Education, Participation, Certifications, Interests, Languages, Internships
- Persistent theme toggle (light/dark) using localStorage
- Accessible markup and keyboard-friendly focus rings
- Sample resume data included (src/data/resume.example.json)

## Quick Start
- npm start
- npm test
- npm run build

Open http://localhost:3000

## Directory Structure
- src/styles/
  - theme.css            Ocean Professional tokens, gradients, utilities
  - layout.css           Header/Footer layout styles
  - components.css       CyberCard and CyberText styles
  - cyber.css            Animated cyber background
- src/components/
  - CyberGrid.jsx        Animated background elements
  - ThemeToggle.jsx      Persistent theme switch
  - CyberCard.jsx        Reusable card surface
  - layout/
    - Header.jsx
    - Footer.jsx
    - Container.jsx
  - sections/
    - Education.jsx
    - Participation.jsx
    - Certifications.jsx
    - Interests.jsx
    - Languages.jsx
    - Internships.jsx
- src/hooks/
  - useTheme.js
- src/utils/
  - icons.js             Inline SVG icon utilities
  - resume.js            Load/validate/save resume JSON
- src/data/
  - resume.example.json  Sample resume that drives the UI

## Supplying Your Resume
- Option 1 (recommended): Store JSON in localStorage under key `resume-data`.
- Option 2: Replace `src/data/resume.example.json` with your data (must match structure).
- On load, the app attempts to load localStorage first, then falls back to example JSON.

Schema keys:
- basic: { name, role, summary, location, email, links[] }
- education: [{ school, degree, focus, start, end, notes[] }]
- participation: [{ title, org, year, details }]
- certifications: [{ name, issuer, year }]
- interests: [string]
- languages: [string | { name, level }]
- internships: [{ company, role, start, end, summary }]

## Theming
- Theme is persisted in localStorage (key: ocean-theme).
- CSS variables in `theme.css` adapt for light/dark modes.

## Accessibility
- Landmarks: header, main (Container), footer, region roles for sections
- Focus ring on interactive elements
- Semantic lists and headings

## Notes
- No external UI frameworks used.
- Icons are inline SVGs defined in `src/utils/icons.js`.
