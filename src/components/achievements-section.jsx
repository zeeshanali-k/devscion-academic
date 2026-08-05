import { Award, ExternalLink } from 'lucide-react';
import { achievements } from '../data/achievements';

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
    </section>
  );
}
