import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { openSource } from '../data/opensource';

export default function OpenSourceSection() {
  return (
    <section className="section-block" id="opensource">
      <div className="section-heading"><span className="section-icon"><FolderGit2 size={19} /></span><div><p className="section-kicker">Community contribution</p><h2>Open source</h2></div></div>
      <div className="open-source-list">
        {openSource.map((item) => (
          <article key={item.id}>
            <div><p className="card-meta">{item.type === 'library' ? 'Library' : 'Project'} · {item.language}</p><h3>{item.name}</h3><p>{item.description}</p></div>
            <a href={item.github} target="_blank" rel="noreferrer" aria-label={`Open ${item.name} on GitHub`}><ArrowUpRight size={18} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}
