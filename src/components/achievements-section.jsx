import { Award, BookOpen, ExternalLink } from 'lucide-react';
import { achievements, teachingExperience } from '../data/achievements';

export default function AchievementsSection() {
  return (
    <section className="side-card" id="achievements">
      <div className="side-title"><Award size={17} /><h2>Highlights</h2></div>
      <div className="highlight-list">
        {achievements.map((item) => (
          <article key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.link && <a href={item.link} target="_blank" rel="noreferrer">{item.linkLabel} <ExternalLink size={12} /></a>}
          </article>
        ))}
      </div>

      <div className="teaching-note">
        <BookOpen size={18} />
        <div>
          <p className="note-label">Teaching</p>
          <h3>{teachingExperience.title}</h3>
          <p>{teachingExperience.description}</p>
          <a href={teachingExperience.playlistUrl} target="_blank" rel="noreferrer">Course playlist <ExternalLink size={12} /></a>
        </div>
      </div>
    </section>
  );
}
