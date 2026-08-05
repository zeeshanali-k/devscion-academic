import { Calendar, Code, ExternalLink, Github, Users, X } from 'lucide-react';
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from 'react-icons/io5';
import { useEffect } from 'react';

export default function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', closeOnEscape); };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title">
        <button className="modal-close" onClick={onClose} aria-label="Close project details"><X size={19} /></button>
        <p className="section-kicker">Project detail</p>
        <h2 id="project-title">{project.title}</h2>
        <p className="modal-lede">{project.description}</p>
        <div className="modal-meta">
          <span><Calendar size={14} /> {project.duration}</span>
          <span><Code size={14} /> {project.role}</span>
          <span><Users size={14} /> {project.team}</span>
        </div>
        <h3>About the project</h3><p>{project.detailedDescription}</p>
        <h3>Key features</h3>
        <ul className="plain-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="tag-list modal-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="modal-actions">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>}
          {project.website && <a href={project.website} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Website</a>}
          {project.playLink && <a href={project.playLink} target="_blank" rel="noreferrer"><IoLogoGooglePlaystore size={16} /> Play Store</a>}
          {project.appStoreLink && <a href={project.appStoreLink} target="_blank" rel="noreferrer"><IoLogoAppleAppstore size={16} /> App Store</a>}
        </div>
      </div>
    </div>
  );
}
