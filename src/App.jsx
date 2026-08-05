import { useState } from 'react';
import NavigationMenu from './components/NavigationMenu';
import Header from './components/header';
import EducationSection from './components/education-section';
import TeachingSection from './components/teaching-section';
import ProjectsSection from './components/projects-section';
import AchievementsSection from './components/achievements-section';
import WorkExperience from './components/work-experience-section';
import CertificationsSection from './components/certifications-section';
import HackathonsSection from './components/hackathons-section';
import OpenSourceSection from './components/OpenSourceSection';
import ProjectDetailsModal from './components/ProjectDetails';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="site-shell">
      <NavigationMenu />
      <main className="page-wrap">
        <Header />

        <div className="content-grid">
          <div className="main-column">
            <EducationSection />
            <TeachingSection />
            <ProjectsSection setSelectedProject={setSelectedProject} />
            <WorkExperience onProjectClick={setSelectedProject} />
            <HackathonsSection />
            <OpenSourceSection />
          </div>

          <aside className="side-column" aria-label="Additional profile information">
            <AchievementsSection />
            <CertificationsSection />
          </aside>
        </div>

        <footer className="site-footer">
          <p>Portfolio of Zeeshan Ali · Computer Science &amp; Applied AI</p>
          <a href="mailto:connectzeeshanali@gmail.com">connectzeeshanali@gmail.com</a>
        </footer>
      </main>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
