import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, GraduationCap, ChevronDown, X, Calendar, Code, Users } from 'lucide-react';
import ProjectsSection from './components/projects-section';
import CertificationsSection from './components/certifications-section';
import EducationSection from './components/education-section';
import Header from './components/header';
import WorkExperience from './components/work-experience-section';


// Project Detail Modal Component
function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto backdrop-blur-2xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right backdrop-blur-xl bg-white/10 hover:bg-white/20 p-2 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Project Image */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-4xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-300">{project.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-2 text-purple-400 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-gray-300 text-sm">{project.duration}</p>
            </div>
            <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-2 text-blue-400 mb-2">
                <Code className="w-5 h-5" />
                <span className="font-semibold">Role</span>
              </div>
              <p className="text-gray-300 text-sm">{project.role}</p>
            </div>
            <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-2 text-pink-400 mb-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Team Size</span>
              </div>
              <p className="text-gray-300 text-sm">{project.team}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 backdrop-blur-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 rounded-full text-sm font-medium border border-purple-400/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">About the Project</h3>
            <p className="text-gray-300 leading-relaxed">{project.detailedDescription}</p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl px-6 py-3 inline-flex items-center gap-2 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/60 rounded-xl px-6 py-3 inline-flex items-center gap-2 text-blue-300 font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      {/* Background decoration with parallax */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-normal filter blur-3xl opacity-40 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-normal filter blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: '1s', transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-600/30 rounded-full mix-blend-normal filter blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: '2s', transform: `translateY(${scrollY * 0.4}px)` }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <Header
          isVisible={isVisible.header} />

        <EducationSection
          isVisible={isVisible.education}
        />

        <ProjectsSection
          isVisible={isVisible.projects}
        />

        <WorkExperience
          isVisible={isVisible.workExperience}
          onProjectClick={setSelectedProject}
        />

        <CertificationsSection
          isVisible={isVisible.certifications}
        />
        {/* Footer */}
        <footer className="text-center">
          <div className="backdrop-blur-2xl bg-white/5 rounded-3xl p-6 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-500">
            <p className="text-gray-400">© 2025 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
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
          background: linear-gradient(180deg, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.4));
          backdrop-filter: blur(20px);
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(168, 85, 247, 0.6), rgba(59, 130, 246, 0.6));
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 6px 16px rgba(168, 85, 247, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }
        
        ::-webkit-scrollbar-thumb:active {
          background: linear-gradient(180deg, rgba(168, 85, 247, 0.8), rgba(59, 130, 246, 0.8));
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 20px rgba(168, 85, 247, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }
        
        /* Firefox Scrollbar */
        * {
          scrollbar-width: auto;
          scrollbar-color: rgba(168, 85, 247, 0.5) rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
}