import React from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { workExperience } from '../data/work_experience';
import { projects } from '../data/projects';

export default function WorkExperience({ isVisible, onProjectClick }) {
    // Helper function to get project details by ID
    const getProjectById = (projectId) => {
        return projects.find(p => p.id === projectId);
    };

    return (
        <section className="mb-16" data-animate id="workExperience">
            <div
                className={`backdrop-blur-2xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                    }`}
            >
                <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="w-8 h-8 text-green-400 animate-pulse" style={{ animationDelay: '0.75s' }} />
                    <h2 className="text-3xl font-bold text-white hover:text-green-400 transition-colors duration-300">Work Experience</h2>
                </div>

                <div className="space-y-6">
                    {workExperience.map((work, index) => (
                        <div
                            key={work.id}
                            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-green-500/20 hover:-translate-y-1"
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Header */}
                            <div className="mb-4">
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{work.title}</h3>
                                    <span className="px-3 py-1 backdrop-blur-lg bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-400/30">
                                        {work.type}
                                    </span>
                                </div>
                                <p className="text-lg text-gray-300 font-medium mb-2">{work.company}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {work.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {work.location}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-4 leading-relaxed">{work.description}</p>

                            {/* Key Responsibilities */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Responsibilities:</h4>
                                <ul className="space-y-1">
                                    {work.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                            <span className="text-green-400 mt-1">▹</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Related Projects */}
                            {work.relatedProjects && work.relatedProjects.length > 0 && (
                                <div className="pt-4 border-t border-white/10">
                                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Related Projects:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {work.relatedProjects.map((projectId) => {
                                            const project = getProjectById(projectId);
                                            return project ? (
                                                <button
                                                    key={projectId}
                                                    onClick={() => onProjectClick(project)}
                                                    className="group px-3 py-1.5 backdrop-blur-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 rounded-lg text-xs font-medium border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 flex items-center gap-1"
                                                >
                                                    {project.title}
                                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </button>
                                            ) : null;
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}