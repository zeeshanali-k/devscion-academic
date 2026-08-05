import { BookOpen, ExternalLink } from 'lucide-react';
import { teachingExperience } from '../data/achievements';

export default function TeachingSection() {
  return (
    <section className="section-block" id="teaching">
      <div className="section-heading">
        <span className="section-icon"><BookOpen size={19} /></span>
        <div>
          <p className="section-kicker">Academic service</p>
          <h2>Teaching experience</h2>
        </div>
      </div>

      <div className="highlight-list teaching-list">
        {teachingExperience.map((course) => (
          <article key={course.id}>
            <p className="card-meta">Volunteer teaching · {course.organization}</p>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="teaching-links">
              {course.websiteUrl && (
                <a href={course.websiteUrl} target="_blank" rel="noreferrer">
                  iCodeGuru <ExternalLink size={12} />
                </a>
              )}
              {course.playlistUrl && (
                <a href={course.playlistUrl} target="_blank" rel="noreferrer">
                  Course playlist <ExternalLink size={12} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
