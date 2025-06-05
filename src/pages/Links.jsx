// src/components/Links.jsx
import React from 'react';
import Section from './Section';
import { Github, Linkedin, BookOpen, Mail } from 'lucide-react';

const navLinks = [
    { href: "https://github.com/KrrishRaj64", icon: Github, text: "Github" },
    { href: "https://www.linkedin.com/in/KrrishRaj/", icon: Linkedin, text: "LinkedIn" }, // Corrected LinkedIn URL assuming KrrishRaj is username
    { href: "https://mindcanvas-three.vercel.app/realizing-existence", icon: BookOpen, text: "Blog" },
    { href: "mailto:krrish@gmail.com", icon: Mail, text: "Contact" },
];

const Links = () => {
    return (
        <Section id="links" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-16 text-center font-space-mono">Connect with me</h2>
                <nav className="nav-container">
                    {navLinks.map(link => {
                        const Icon = link.icon;
                        return (
                            <a 
                                key={link.text}
                                href={link.href} 
                                target={link.href.startsWith('http') ? "_blank" : "_self"} 
                                rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
                                className="nav-link text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-bold"
                            >
                                <Icon size={24} />
                                {link.text}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </Section>
    );
};

export default Links;