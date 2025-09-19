import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/theme.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/cyber.css';

import CyberGrid from './components/CyberGrid';
import Container from './components/layout/Container';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ThemeToggle from './components/ThemeToggle';

import Education from './components/sections/Education';
import Participation from './components/sections/Participation';
import Certifications from './components/sections/Certifications';
import Interests from './components/sections/Interests';
import Languages from './components/sections/Languages';
import Internships from './components/sections/Internships';
import Publications from './components/sections/Publications';
import Projects from './components/sections/Projects';

import { loadResumeData } from './utils/resume';

// PUBLIC_INTERFACE
function App() {
  const [resume, setResume] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await loadResumeData();
        if (mounted) setResume(data);
      } catch (e) {
        setError(e.message || 'Failed to load resume');
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="App" role="application">
      <CyberGrid />
      <Header basic={resume?.basic} themeButton={<ThemeToggle />} />
      <Container>
        {error && (
          <div role="alert" className="pill" style={{ margin: '16px 0' }}>
            Error loading resume: {error}
          </div>
        )}
        {resume && (
          <div className="grid two" style={{ marginTop: 16 }}>
            <div className="grid" style={{ gap: 20 }}>
              <Education items={resume.education} />
              <Participation items={resume.participation} />
              <Certifications items={resume.certifications} />
            </div>
            <div className="grid" style={{ gap: 20 }}>
              <Interests items={resume.interests} />
              <Languages items={resume.languages} />
              <Internships items={resume.internships} />
              <Projects items={resume.projects} />
              <Publications items={resume.publications} />
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
