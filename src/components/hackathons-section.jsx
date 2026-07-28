import { Award, ExternalLink, Github, Globe, Trophy } from 'lucide-react';
import { hackathons } from '../data/hackathons';

export default function HackathonsSection({ isVisible }) {
    return (
        <section className="mb-16" data-animate id="hackathons">
            <div
                className={`backdrop-blur-2xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
            >
                <div className="flex items-center gap-3 mb-6">
                    <Trophy className="w-8 h-8 text-amber-400 animate-pulse" style={{ animationDelay: '0.7s' }} />
                    <h2 className="text-3xl font-bold text-white hover:text-amber-400 transition-colors duration-300">Hackathon Projects</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {hackathons.map((hackathon, index) => (
                        <article
                            key={hackathon.id}
                            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1 flex flex-col"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <p className="text-xs font-semibold uppercase tracking-widest text-amber-300 mb-2">{hackathon.hackathonName}</p>
                            <h3 className="text-2xl font-bold text-white mb-3">{hackathon.projectName}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-grow">{hackathon.description}</p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {hackathon.technologies.map((technology) => (
                                    <span key={technology} className="px-3 py-1 backdrop-blur-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-100 rounded-full text-xs font-medium border border-amber-400/30">
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3 mt-auto">
                                {hackathon.githubUrl && (
                                    <a
                                        href={hackathon.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg px-3 py-2 inline-flex items-center gap-2 text-gray-100 font-medium text-sm transition-all duration-300 hover:scale-105"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                )}
                                {hackathon.certificateUrl && (
                                    <a
                                        href={hackathon.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="backdrop-blur-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 hover:border-amber-400/60 rounded-lg px-3 py-2 inline-flex items-center gap-2 text-amber-200 font-medium text-sm transition-all duration-300 hover:scale-105"
                                    >
                                        <Award className="w-4 h-4" />
                                        Certificate
                                    </a>
                                )}
                                {hackathon.hackathonWebsiteUrl && (
                                    <a
                                        href={hackathon.hackathonWebsiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="backdrop-blur-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/60 rounded-lg px-3 py-2 inline-flex items-center gap-2 text-blue-200 font-medium text-sm transition-all duration-300 hover:scale-105"
                                    >
                                        <Globe className="w-4 h-4" />
                                        Hackathon Website
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
