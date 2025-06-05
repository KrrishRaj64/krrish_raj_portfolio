// src/components/Skills.jsx
import React from 'react';
import Section from './Section';

const skillsData = [
    { name: "C", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/c.svg" },
    { name: "C++", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cplusplus.svg" },
    { name: "GNU Bash", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gnubash.svg" },
    { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linux.svg" },
    { name: "CMake", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cmake.svg" },
    { name: "Python", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/python.svg" },
];

const Skills = () => {
    return (
        <Section id="skills" className="py-16">
            <div className="container mx-auto px-8 sm:px-16">
                <h2 className="text-3xl font-bold mb-16 text-center font-space-mono">What I fiddle with....</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-12 place-items-center">
                    {skillsData.map(skill => (
                        <img key={skill.name} src={skill.iconUrl} alt={skill.name} className="tech-icon" />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;