
import { Github, ExternalLink, X, Calendar, Code, Users } from 'lucide-react';
import { useEffect } from 'react';
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";


export default function ProjectDetailsModal({ project, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto backdrop-blur-2xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl animate-slideUp">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="sticky top-4 right-4 float-right backdrop-blur-xl bg-white/10 hover:bg-white/20 p-2 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 z-10"
                >
                    <X className="w-6 h-6 text-white" />
                </button>

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h2 className="text-4xl font-bold text-white mb-2">{project.title}</h2>
                        <p className="text-gray-300">{project.description}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Meta Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20">
                            <div className="flex items-center gap-2 text-purple-400 mb-2">
                                <Calendar className="w-5 h-5" />
                                <span className="font-semibold">Duration</span>
                            </div>
                            <p className="text-gray-300 text-sm">{project.duration}</p>
                        </div>
                        <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20">
                            <div className="flex items-center gap-2 text-blue-400 mb-2">
                                <Code className="w-5 h-5" />
                                <span className="font-semibold">Role</span>
                            </div>
                            <p className="text-gray-300 text-sm">{project.role}</p>
                        </div>
                        <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20">
                            <div className="flex items-center gap-2 text-pink-400 mb-2">
                                <Users className="w-5 h-5" />
                                <span className="font-semibold">Team Size</span>
                            </div>
                            <p className="text-gray-300 text-sm">{project.team}</p>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="px-4 py-2 backdrop-blur-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 rounded-full text-sm font-medium border border-purple-400/30">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Description */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">About the Project</h3>
                        <p className="text-gray-300 leading-relaxed">{project.detailedDescription}</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                        <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-300">
                                    <span className="text-blue-400 mt-1">▹</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl px-6 py-3 inline-flex items-center gap-2 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <Github className="w-5 h-5" />
                                View on GitHub
                            </a>
                        )}
                        {project.website && (
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="backdrop-blur-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/60 rounded-xl px-6 py-3 inline-flex items-center gap-2 text-blue-300 font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Visit Website
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="backdrop-blur-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/60 rounded-xl px-6 py-3 inline-flex items-center gap-2 text-blue-300 font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                            >
                                <ExternalLink className="w-5 h-5" color="#3BCCFF" />
                                Download App
                            </a>
                        )}
                        {project.playLink && (
                            <a
                                href={project.playLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="backdrop-blur-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/60 rounded-xl px-6 py-3 inline-flex items-center gap-2 text-blue-300 font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                            >
                                <IoLogoGooglePlaystore className="w-5 h-5" color="#ffffff" />
                                Playstore
                            </a>
                        )}
                        {project.appStoreLink && (
                            <a
                                href={project.appStoreLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="backdrop-blur-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/60 rounded-xl px-6 py-3 inline-flex items-center gap-2 text-blue-300 font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                            >
                                <IoLogoAppleAppstore className="w-5 h-5" color="#ffffff" />
                                App Store
                            </a>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}