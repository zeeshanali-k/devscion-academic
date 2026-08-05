import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function CertificationsSection() {
  return (
    <section className="side-card" id="certifications">
      <div className="side-title"><Award size={17} /><h2>Coursework &amp; certificates</h2></div>
      <div className="certificate-list">
        {certifications.map((cert, index) => (
          <a href={cert.link} target="_blank" rel="noreferrer" key={`${cert.id}-${index}`}>
            <div><h3>{cert.name}</h3><p>{cert.issuer} · {cert.date}</p></div>
            <ExternalLink size={14} />
          </a>
        ))}
      </div>
    </section>
  );
}
