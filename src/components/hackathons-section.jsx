import { ArrowUpRight, FlaskConical } from 'lucide-react';
import { hackathons } from '../data/hackathons';

export default function HackathonsSection() {
  return (
    <section className="section-block" id="hackathons">
      <div className="section-heading section-heading-split">
        <div className="heading-group"><span className="section-icon"><FlaskConical size={19} /></span><div><p className="section-kicker">Rapid hackathon prototypes</p><h2>Hackathons</h2></div></div>
        <p className="section-summary">Short-cycle collaborations where I explore new AI workflows and learning tools.</p>
      </div>
      <div className="research-grid">
        {hackathons.map((item) => (
          <article className="research-card" key={item.id}>
            <p className="card-meta">{item.hackathonName}</p>
            <h3>{item.projectName}</h3>
            <p>{item.description}</p>
            <div className="tag-list">{item.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
            {item.githubUrl && <a href={item.githubUrl} target="_blank" rel="noreferrer">View project <ArrowUpRight size={14} /></a>}
          </article>
        ))}
      </div>
    </section>
  );
}
