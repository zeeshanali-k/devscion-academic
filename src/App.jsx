import { useState, useEffect } from 'react';
import ProjectsSection from './components/projects-section';
import CertificationsSection from './components/certifications-section';
import EducationSection from './components/education-section';
import Header from './components/header';
import WorkExperience from './components/work-experience-section';
import ProjectDetailsModal from './components/ProjectDetails';
import NavigationMenu from './components/NavigationMenu';
import OpenSourceSection from './components/OpenSourceSection';

// Main Component
export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        <NavigationMenu />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        </div>
        <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl pt-24">
        </div>
        {/* Header Section */}
        <Header
          isVisible={isVisible.header} />

        <EducationSection
          isVisible={isVisible.education}
        />

        <CertificationsSection
          isVisible={isVisible.certifications}
        />

        <WorkExperience
          isVisible={isVisible.workExperience}
          onProjectClick={setSelectedProject}
        />

        <ProjectsSection
          isVisible={isVisible.projects}
          setSelectedProject={setSelectedProject}
        />

        <OpenSourceSection
          isVisible={isVisible.opensource}
        />

        <footer className="text-center">
          {/* <div className="backdrop-blur-2xl bg-white/5 rounded-3xl p-6 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-500">
            <p className="text-gray-400">© 2025 Zeeshan Ali. All rights reserved.</p>
          </div> */}
        </footer>
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        /* Custom Glassmorphic Scrollbar Styles */
        ::-webkit-scrollbar {
          width: 16px;
          height: 16px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          margin: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 1);
          backdrop-filter: blur(20px);
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background:  rgba(168, 85, 247, 1);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 6px 16px rgba(168, 85, 247, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }
        
        ::-webkit-scrollbar-thumb:active {
          background:  rgba(168, 85, 247, 1);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 20px rgba(168, 85, 247, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }
        
        /* Firefox Scrollbar */
        * {
          scrollbar-width: auto;
          scrollbar-color:  rgba(168, 85, 247, 1);
        }
      `}</style>
    </div>
  );
}