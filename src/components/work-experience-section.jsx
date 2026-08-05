import { Briefcase, MapPin } from 'lucide-react';
import { workExperience } from '../data/work_experience';
import { projects } from '../data/projects';

export default function WorkExperience({ onProjectClick }) {
  return (
    <section className="section-block" id="workExperience">
      <div className="section-heading">
        <span className="section-icon"><Briefcase size={19} /></span>
        <div><p className="section-kicker">Professional practice</p><h2>Experience</h2></div>
      </div>

      <div className="experience-list">
        {workExperience.map((work) => (
          <article className="experience-item" key={work.id}>
            <div className="item-topline">
              <div><h3>{work.title}</h3><p className="institution">{work.company}</p></div>
              <span className="date-label">{work.duration}</span>
            </div>
            <p className="location"><MapPin size={14} /> {work.location} · {work.type}</p>
            <p className="body-copy">{work.description}</p>
            <ul className="plain-list">
              {work.responsibilities.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
            </ul>
            {work.relatedProjects?.length > 0 && (
              <div className="related-row">
                <span>Related work</span>
                {work.relatedProjects.map((id) => {
                  const project = projects.find((entry) => entry.id === id);
                  return project ? <button key={id} onClick={() => onProjectClick(project)}>{project.title}</button> : null;
                })}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
