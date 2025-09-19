import React, { useEffect, useState, useCallback } from 'react';
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

import AccordionSection from './components/AccordionSection';
import { loadResumeData } from './utils/resume';

// PUBLIC_INTERFACE
function App() {
  const [resume, setResume] = useState(null);
  const [error, setError] = useState('');
  // track which accordion is open (one-at-a-time). Use key names for stability.
  const [openKey, setOpenKey] = useState(null);
  const handleToggle = useCallback((key) => (isOpen) => {
    setOpenKey(prev => (isOpen ? key : prev === key ? null : prev));
  }, []);

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

  const blurClass = openKey ? 'cards-active' : '';

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
          <div className={`grid two cards-wrap ${blurClass}`} style={{ marginTop: 16 }}>
            <div className="grid" style={{ gap: 20 }}>
              <AccordionSection
                title="Education"
                icon={null}
                defaultOpen={false}
                onToggle={handleToggle('education')}
              >
                <Education items={resume.education} />
              </AccordionSection>

              <AccordionSection
                title="Participation"
                icon={null}
                defaultOpen={false}
                onToggle={handleToggle('participation')}
              >
                <Participation items={resume.participation} />
              </AccordionSection>

              <AccordionSection
                title="Certifications"
                icon={null}
                defaultOpen={false}
                onToggle={handleToggle('certifications')}
              >
                <Certifications items={resume.certifications} />
              </AccordionSection>
            </div>

            <div className="grid" style={{ gap: 20 }}>
              <AccordionSection
                title="Interests"
                icon={null}
                defaultOpen={false}
                onToggle={handleToggle('interests')}
              >
                <Interests items={resume.interests} />
              </AccordionSection>

              <AccordionSection
                title="Languages"
                icon={null}
                defaultOpen={false}
                onToggle={handleToggle('languages')}
              >
                <Languages items={resume.languages} />
              </AccordionSection>

              <AccordionSection
                title="Internships"
                icon={null}
                defaultOpen={false}
                onToggle={handleToggle('internships')}
              >
                <Internships items={resume.internships} />
              </AccordionSection>

              <AccordionSection
                title="Projects"
                icon={null}
                defaultOpen={false}
                onToggle={handleToggle('projects')}
              >
                <Projects items={resume.projects} />
              </AccordionSection>

              <AccordionSection
                title="Publications"
                icon={null}
                defaultOpen={false}
                onToggle={handleToggle('publications')}
              >
                <Publications items={resume.publications} />
              </AccordionSection>
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
