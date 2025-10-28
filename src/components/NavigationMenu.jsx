import React, { useState, useEffect } from 'react';
import { Home, GraduationCap, Briefcase, FolderKanban, FolderGit2, Award } from 'lucide-react';

export default function NavigationMenu() {
    const [activeSection, setActiveSection] = useState('header');
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: 'header', label: 'Home', icon: Home },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'certifications', label: 'Certifications', icon: Award },
        { id: 'workExperience', label: 'Experience', icon: Briefcase },
        { id: 'projects', label: 'Projects', icon: FolderKanban },
        { id: 'opensource', label: 'OpenSource', icon: FolderGit2 }
    ];

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.id);
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 100; // 100px offset for the sticky header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
                ? 'backdrop-blur-2xl bg-gray-900/80 shadow-2xl border-b border-white/10'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex items-center justify-between py-4">
                    {/* Logo/Brand */}
                    <button
                        onClick={() => scrollToSection('header')}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/80 to-blue-600/80 backdrop-blur-xl flex items-center justify-center text-white text-sm font-bold shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                            ZA
                        </div>
                        <span className="text-white font-bold text-lg hidden sm:block">Zeeshan Ali</span>
                    </button>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`group relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${isActive
                                        ? 'backdrop-blur-xl bg-white/20 text-white shadow-lg border border-white/30'
                                        : 'backdrop-blur-lg bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="hidden md:block text-sm font-medium">{item.label}</span>

                                    {/* Active indicator */}
                                    {isActive && (
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}