import { Award, BookOpen, ExternalLink, GraduationCap } from 'lucide-react';
import { achievements, teachingExperience } from '../data/achievements';

export default function AchievementsSection({ isVisible }) {
    return (
        <section className="mb-16" data-animate id="achievements">
            <div
                className={`backdrop-blur-2xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
            >
                <div className="flex items-center gap-3 mb-6">
                    <Award className="w-8 h-8 text-yellow-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <h2 className="text-3xl font-bold text-white hover:text-yellow-400 transition-colors duration-300">Achievements</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {achievements.map((achievement, index) => (
                        <article
                            key={achievement.id}
                            className="backdrop-blur-xl bg-white/10 rounded-2xl p-5 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-1 flex flex-col"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed flex-grow">{achievement.description}</p>
                            {achievement.link && (
                                <a
                                    href={achievement.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-300 hover:text-yellow-200 transition-colors duration-300"
                                >
                                    {achievement.linkLabel}
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            )}
                        </article>
                    ))}
                </div>

                <article className="mt-6 backdrop-blur-xl bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-2xl p-6 border border-purple-400/25 shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/25 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-6 h-6 text-purple-200" />
                        </div>
                        <div className="flex-grow">
                            <p className="text-xs font-semibold uppercase tracking-widest text-purple-200 mb-2">Volunteer Teaching</p>
                            <h3 className="text-xl font-bold text-white mb-2">{teachingExperience.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{teachingExperience.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-3 md:justify-end">
                            <a
                                href={teachingExperience.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg px-3 py-2 inline-flex items-center gap-2 text-gray-100 font-medium text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
                            >
                                iCodeGuru
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                            <a
                                href={teachingExperience.playlistUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="backdrop-blur-xl bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 hover:border-red-400/60 rounded-lg px-3 py-2 inline-flex items-center gap-2 text-red-200 font-medium text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
                            >
                                <BookOpen className="w-4 h-4" />
                                Watch Playlist
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
