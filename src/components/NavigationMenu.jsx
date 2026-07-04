import React, { useState, useEffect } from 'react';
import { Home, GraduationCap, Briefcase, FolderKanban, FolderGit2, Award, FileText, Menu, X } from 'lucide-react';

export default function NavigationMenu() {
    const [activeSection, setActiveSection] = useState('header');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
        setIsMobileMenuOpen(false);
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

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-2">
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
                                    <span className="text-sm font-medium">{item.label}</span>

                                    {/* Active indicator */}
                                    {isActive && (
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                                    )}
                                </button>
                            );
                        })}

                        {/* Resume/CV Button */}
                        <a
                            href="/media/Resume_Zeeshan_Ali.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/80 to-blue-600/80 text-white font-medium text-sm shadow-lg border border-white/20 hover:from-purple-500 hover:to-blue-600 hover:scale-105 transition-all duration-300"
                        >
                            <FileText className="w-4 h-4" />
                            <span className="text-sm font-medium">Resume/CV</span>
                        </a>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex md:hidden items-center gap-2">
                        {/* Resume/CV Button (Icon only on mobile) */}
                        <a
                            href="/media/Resume_Zeeshan_Ali.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500/80 to-blue-600/80 text-white shadow-lg border border-white/20 hover:from-purple-500 hover:to-blue-600 hover:scale-105 transition-all duration-300"
                            aria-label="Resume/CV"
                        >
                            <FileText className="w-5 h-5" />
                        </a>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${isMobileMenuOpen
                                ? 'bg-white/20 text-white border border-white/30'
                                : 'backdrop-blur-lg bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                                }`}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                        ? 'max-h-96 opacity-100 pb-4'
                        : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex flex-col gap-2 rounded-2xl backdrop-blur-2xl bg-gray-900/90 border border-white/10 p-2 shadow-2xl">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${isActive
                                        ? 'bg-white/20 text-white shadow-lg border border-white/30'
                                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{item.label}</span>
                                    {isActive && (
                                        <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
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
