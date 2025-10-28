import { projects } from "../data/projects";
import { Briefcase, ExternalLink } from 'lucide-react';
export default function ProjectsSection({ isVisible, setSelectedProject }) {
    return (<section className="mb-16" data-animate id="projects">
        <div
            className={`backdrop-blur-2xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
        >
            <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <h2 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300">Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="backdrop-blur-xl bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/20 group flex flex-col"
                        style={{
                            transitionDelay: `${index * 100}ms`
                        }}
                    >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex-shrink-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 backdrop-blur-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 rounded-full text-xs font-medium border border-purple-400/30 hover:border-purple-400/60 hover:scale-110 transition-all duration-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="relative backdrop-blur-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/60 rounded-lg px-4 py-2 inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30 overflow-hidden group/btn w-full justify-center mt-auto"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View Details <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>)
}
