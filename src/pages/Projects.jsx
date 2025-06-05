// src/components/Projects.jsx
import React from 'react';
import Section from './Section';
import ProjectTile from './ProjectTitle';

const projectsData = [
    {
        title: "Developer Portfolio",
        description: "This is a developer portfolio made using Tailwind framework, and a little bit of JS. This is the current site you are viewing, adapted to React!",
        url: "https://github.com/KrrishRaj64/Portfolio-React", // Example: Link to the new React version repo
        image: "https://opengraph.githubassets.com/1/KrrishRaj64/Portfolio-React" // Placeholder, update with actual repo opengraph image
    },
    // Add more projects here if you have them from your original code or new ones
    // Example:
    // {
    //     title: "Another Project",
    //     description: "Description of another cool project.",
    //     url: "https://github.com/yourusername/another-project",
    //     image: "https://opengraph.githubassets.com/1/yourusername/another-project"
    // }
];

const Projects = () => {
    return (
        <Section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 max-w-6xl projects-container">
                <h2 className="text-3xl font-bold mb-12 text-center font-space-mono">Projects</h2>
                {projectsData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map(project => (
                            <ProjectTile key={project.title} project={project} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400">More projects coming soon!</p>
                )}
            </div>
        </Section>
    );
};

export default Projects;