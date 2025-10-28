import { Package, FolderGit2, Star, GitFork, Github, ExternalLink, Download } from 'lucide-react';
import { openSource } from '../data/opensource';

export default function OpenSourceSection({ isVisible }) {
    // Get language color (you can customize these)
    const getLanguageColor = (language) => {
        const colors = {
            JavaScript: 'bg-yellow-500',
            TypeScript: 'bg-blue-500',
            Python: 'bg-blue-400',
            Kotlin: 'bg-purple-500',
            Dart: 'bg-cyan-500',
            Java: 'bg-orange-500',
            Swift: 'bg-orange-400',
            Go: 'bg-cyan-400',
            Rust: 'bg-orange-600',
            Ruby: 'bg-red-500'
        };
        return colors[language] || 'bg-gray-500';
    };

    return (
        <section className="mb-16" data-animate id="opensource">
            <div
                className={`backdrop-blur-2xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
            >
                <div className="flex items-center gap-3 mb-6">
                    <FolderGit2 className="w-8 h-8 text-orange-400 animate-pulse" style={{ animationDelay: '1.25s' }} />
                    <h2 className="text-3xl font-bold text-white hover:text-orange-400 transition-colors duration-300">
                        Open Source
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {openSource.map((item, index) => (
                        <div
                            key={item.id}
                            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 flex flex-col"
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Header with Type Badge */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2 flex-1">
                                    {item.type === 'library' ? (
                                        <Package className="w-5 h-5 text-orange-400 flex-shrink-0" />
                                    ) : (
                                        <FolderGit2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                    )}
                                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                                </div>
                                <span
                                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold border flex-shrink-0 ${item.type === 'library'
                                        ? 'bg-orange-500/20 text-orange-300 border-orange-400/30'
                                        : 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                                        }`}
                                >
                                    {item.type === 'library' ? 'Library' : 'Project'}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
                                {item.description}
                            </p>

                            {/* Stats */}
                            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                                {item.language && (
                                    <div className="flex items-center gap-1.5">
                                        <span className={`w-3 h-3 rounded-full ${getLanguageColor(item.language)}`}></span>
                                        <span>{item.language}</span>
                                    </div>
                                )}
                                {item.stars !== undefined && (
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4" />
                                        <span>{item.stars}</span>
                                    </div>
                                )}
                                {item.forks !== undefined && (
                                    <div className="flex items-center gap-1">
                                        <GitFork className="w-4 h-4" />
                                        <span>{item.forks}</span>
                                    </div>
                                )}
                                {item.downloads && (
                                    <div className="flex items-center gap-1">
                                        <Download className="w-4 h-4" />
                                        <span>{item.downloads}</span>
                                    </div>
                                )}
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2.5 py-1 backdrop-blur-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 rounded-full text-xs font-medium border border-purple-400/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                {item.github && (
                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white rounded-lg text-xs font-medium border border-white/20 hover:border-white/40 transition-all duration-300"
                                    >
                                        <Github className="w-3.5 h-3.5" />
                                        GitHub
                                    </a>
                                )}
                                {item.demo && (

                                    <a
                                        href={item.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 rounded-lg text-xs font-medium border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        Demo
                                    </a>
                                )}
                                {item.npm && (

                                    <a
                                        href={item.npm}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 rounded-lg text-xs font-medium border border-red-400/30 hover:border-red-400/60 transition-all duration-300"
                                    >
                                        <Package className="w-3.5 h-3.5" />
                                        npm
                                    </a>
                                )}
                                {item.pypi && (

                                    <a
                                        href={item.pypi}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 rounded-lg text-xs font-medium border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
                                    >
                                        <Package className="w-3.5 h-3.5" />
                                        PyPI
                                    </a>
                                )}
                                {item.pub && (

                                    <a
                                        href={item.pub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-cyan-200 rounded-lg text-xs font-medium border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
                                    >
                                        <Package className="w-3.5 h-3.5" />
                                        pub.dev
                                    </a>
                                )}
                                {item.marketplace && (

                                    <a
                                        href={item.marketplace}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 hover:text-purple-200 rounded-lg text-xs font-medium border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        Marketplace
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}