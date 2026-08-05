import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

export default function EducationSection() {
  return (
    <section className="section-block" id="education">
      <div className="section-heading">
        <span className="section-icon"><GraduationCap size={19} /></span>
        <div><p className="section-kicker">Academic background</p><h2>Education</h2></div>
      </div>

      <div className="timeline-list">
        {education.map((edu) => (
          <article className="timeline-item" key={edu.id}>
            <div className="timeline-mark" />
            <div className="timeline-content">
              <div className="item-topline">
                <h3>{edu.degree}</h3>
                <span className="date-label">{edu.duration}</span>
              </div>
              <p className="institution">{edu.institution}</p>
              <p className="result-label">Academic result: <strong>{edu.gpa}</strong></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
