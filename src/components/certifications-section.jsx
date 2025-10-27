import { certifications } from "../data/certifications";
import { ExternalLink, Award } from 'lucide-react';

export default function CertificationsSection({ isVisible }) {

    return (<section className="mb-16" data-animate id="certifications">
        <div
            className={`backdrop-blur-2xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
        >
            <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />
                <h2 className="text-3xl font-bold text-white hover:text-pink-400 transition-colors duration-300">Certifications</h2>
            </div>
            <div className="space-y-4">
                {certifications.map((cert, index) => (
                    <div
                        key={cert.id}
                        className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-pink-500/20 hover:-translate-y-1"
                        style={{
                            transitionDelay: `${index * 100}ms`
                        }}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                                <p className="text-gray-300 font-medium mb-1">{cert.issuer}</p>
                                <div className="flex flex-wrap gap-4 items-center text-gray-400 text-sm">
                                    <span>{cert.date}</span>
                                    <span className="font-mono text-xs text-gray-500">ID: {cert.credentialId}</span>
                                </div>
                            </div>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="backdrop-blur-xl bg-pink-500/20 hover:bg-pink-500/30 border border-pink-400/30 hover:border-pink-400/60 rounded-lg px-4 py-2 inline-flex items-center gap-2 text-pink-300 hover:text-pink-200 font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/30 self-start md:self-center whitespace-nowrap"
                            >
                                View Certificate <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );

}