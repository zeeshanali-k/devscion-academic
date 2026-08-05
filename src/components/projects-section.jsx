import { ArrowUpRight, FolderKanban } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectsSection({ setSelectedProject }) {
  return (
    <section className="section-block" id="projects">
      <div className="section-heading section-heading-split">
        <div className="heading-group">
          <span className="section-icon"><FolderKanban size={19} /></span>
          <div><p className="section-kicker">Technical portfolio</p><h2>Selected Projects</h2></div>
        </div>
        <p className="section-summary">A selection of shipped systems spanning applied AI and cross-platform engineering.</p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.id}>
            <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="project-body">
              <div className="item-topline">
                <h3>{project.title}</h3>
                <span className="date-label">{project.duration}</span>
              </div>
              <p>{project.description}</p>
              <div className="toolkit-block">
                <p className="toolkit-label">Tools &amp; skills</p>
                <div className="tag-list">
                  {project.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </div>
            <button className="icon-button" onClick={() => setSelectedProject(project)} aria-label={`Read about ${project.title}`}>
              <ArrowUpRight size={18} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
