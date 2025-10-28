import { socialLinks } from "../data/profile";
import { ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';

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
                ZA
            </div>
            <h1 className="text-5xl font-bold text-white mb-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300">Zeeshan Ali</h1>

            <TitleSlider />

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

const titles = [
    {
        role: 'Mobile Apps Developer',
        skills: 'Android | iOS | KMP | Flutter'
    },
    {
        role: 'AI Enthusiast',
        skills: 'Python | PyTorch | Tensorflow'
    }
];

function TitleSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const DURATION = 3000; // 3 seconds per title

    useEffect(() => {
        // Reset progress when title changes
        setProgress(0);

        // Progress animation
        const startTime = Date.now();
        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / DURATION) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                clearInterval(progressInterval);
            }
        }, 16); // Update ~60fps

        // Change title after duration
        const titleTimer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, DURATION);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(titleTimer);
        };
    }, [currentIndex]);

    return (
        <div className="mb-6">
            {/* Titles Section */}
            <div className="h-16 relative overflow-hidden mb-6">
                {titles.map((title, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${index === currentIndex
                            ? 'opacity-100 translate-y-0'
                            : index < currentIndex
                                ? 'opacity-0 -translate-y-full'
                                : 'opacity-0 translate-y-full'
                            }`}
                    >
                        <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 mb-1">
                            {title.role}
                        </p>
                        {title.skills && (
                            <p className="text-sm md:text-base text-gray-400 font-medium">
                                {title.skills}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md mx-auto mb-4">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-lg">
                    <div
                        className="h-full bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-full transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-3">
                    {titles.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                ? 'w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 scale-125'
                                : 'w-1.5 h-1.5 bg-gray-600 hover:bg-gray-500'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}