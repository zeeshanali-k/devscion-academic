import { socialLinks } from "../data/profile";
import { ChevronDown } from 'lucide-react';

export default function Header({ isVisible }) {
    return (<header className="text-center mb-16" data-animate id="header">
        <div
            className={`backdrop-blur-2xl bg-white/5 rounded-3xl p-12 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            style={{
                transition: 'all 0.7s ease-out',
                transform: `translateY(${scrollY * -0.1}px)`
            }}
        >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/80 to-blue-600/80 backdrop-blur-xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl border border-white/20 hover:scale-110 transition-transform duration-300">
                YN
            </div>
            <h1 className="text-5xl font-bold text-white mb-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300">Your Name</h1>
            <p className="text-xl text-gray-300 mb-6">Computer Science Researcher | Software Engineer</p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 flex-wrap">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative backdrop-blur-xl bg-white/10 hover:bg-white/20 p-3 rounded-xl hover:scale-105 shadow-xl border border-white/20 hover:border-white/40 overflow-hidden hover:shadow-purple-500/50"
                        style={{
                            width: '48px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.width = '160px';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.width = '48px';
                        }}
                        title={social.name}
                    >
                        <div className="flex items-center gap-3 whitespace-nowrap">
                            <social.icon className="w-6 h-6 text-gray-200 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium text-sm">
                                {social.name}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            {/* Scroll indicator */}
            <div className="mt-12 animate-bounce">
                <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
            </div>
        </div>
    </header>
    );
}