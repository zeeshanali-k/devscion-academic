
import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

export default function EducationSection({ isVisible }) {
    return (
        <section className="mb-16" data-animate id="education">
            <div
                className={`backdrop-blur-2xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
            >
                <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-8 h-8 text-purple-400 animate-pulse" />
                    <h2 className="text-3xl font-bold text-white hover:text-purple-400 transition-colors duration-300">Education</h2>
                </div>
                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <div
                            key={edu.id}
                            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                            <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                            <div className="flex justify-between items-center text-gray-400">
                                <span>{edu.duration}</span>
                                <span className="font-semibold text-purple-300">{edu.gpa}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}