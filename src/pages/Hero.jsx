// src/components/Hero.jsx
import React from 'react';
import { Github, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="flex items-center justify-center min-h-screen relative">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-black mb-2 tracking-tighter leading-none text-shadow-glow-subtle">
                    Krrish Raj <span className="font-garamond font-normal">Kushagray</span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-8">
                    <span className="text-gray-600 dark:text-[#C9C9C9]">Software Developer & </span>
                    <span className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] text-transparent bg-clip-text">Designer</span>
                </p>

                <div className="flex justify-center space-x-4 mb-12">
                    <a href="https://github.com/KrrishRaj64/" target="_blank" rel="noopener noreferrer" className="button button-filled flex items-center space-x-2">
                        <span>GitHub</span>
                        <Github size={20} />
                    </a>
                    <a href="mailto:krrish@gmail.com" className="button button-outlined flex items-center space-x-2">
                        <span>Contact Me</span>
                        <Mail size={20} />
                    </a>
                </div>
            </div>
            <div className="chevron-down">
                <ChevronDown size={32} />
            </div>
        </section>
    );
};

export default Hero;