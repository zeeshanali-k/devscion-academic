import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'header', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'projects', label: 'Selected work' },
  { id: 'workExperience', label: 'Experience' },
  { id: 'hackathons', label: 'Research builds' },
  { id: 'opensource', label: 'Open source' }
];

export default function NavigationMenu() {
  const [activeSection, setActiveSection] = useState('header');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const current = navItems.find(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 130 && rect.bottom >= 130;
      });
      if (current) setActiveSection(current.id);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <nav className="top-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <button className="wordmark" onClick={() => goTo('header')} aria-label="Go to top">
          <span>ZA</span> Academic Portfolio
        </button>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => goTo(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a className="nav-cv" href="/media/Resume_Zeeshan_Ali.pdf" target="_blank" rel="noreferrer">
            <FileText size={15} /> CV
          </a>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle navigation">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => goTo(item.id)}>{item.label}</button>
          ))}
          <a href="/media/Resume_Zeeshan_Ali.pdf" target="_blank" rel="noreferrer">View CV</a>
        </div>
      )}
    </nav>
  );
}
