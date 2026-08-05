import { ArrowDown, FileText, Mail, MapPin } from 'lucide-react';
import { socialLinks } from '../data/profile';

const researchInterests = [
  'Applied artificial intelligence',
  'Human-centered computing',
  'Intelligent learning systems',
  'Cross-platform software systems'
];

export default function Header() {
  return (
    <header className="hero" id="header">
      <div className="hero-copy">
        <p className="eyebrow">Academic portfolio · 2026</p>
        <h1>Zeeshan Ali</h1>
        <p className="hero-role">Computer Science researcher &amp; software engineer</p>
        <p className="hero-intro">
          I build practical intelligent systems across mobile, web, and AI. I am interested in
          doctoral study that connects rigorous computer science research with useful,
          accessible technology.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="/media/Resume_Zeeshan_Ali.pdf" target="_blank" rel="noreferrer">
            <FileText size={17} /> View curriculum vitae
          </a>
          <a className="button button-secondary" href="mailto:connectzeeshanali@gmail.com">
            <Mail size={17} /> Contact me
          </a>
        </div>

        <div className="social-row" aria-label="Professional profiles">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
              <social.icon size={16} aria-hidden="true" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero-note" aria-label="Research profile">
        <div className="monogram" aria-hidden="true">ZA</div>
        <p className="note-label">Research interests</p>
        <ul>
          {researchInterests.map((interest) => <li key={interest}>{interest}</li>)}
        </ul>
        <div className="location-line">
          <MapPin size={15} /> Pakistan · Prospective Graduate Candidate
        </div>
        <a className="quiet-link" href="#education">Review profile <ArrowDown size={14} /></a>
      </div>
    </header>
  );
}
