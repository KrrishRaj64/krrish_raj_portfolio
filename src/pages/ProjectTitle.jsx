// src/components/ProjectTile.jsx
import React from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

const ProjectTile = ({ project }) => {
    const handleThumbnailClick = () => {
        window.open(project.url, '_blank');
    };

    return (
        <div className="project-tile">
            <div 
                className="project-thumbnail mb-4"
                onClick={handleThumbnailClick}
                onKeyPress={(e) => e.key === 'Enter' && handleThumbnailClick()}
                role="link"
                tabIndex={0}
            >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="redirect-icon">
                    <ExternalLink size={32} />
                </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="read-more">
                find more
                <Github size={16} />
            </a>
            <div className="repo-actions">
                <a href={`${project.url}/stargazers`} target="_blank" rel="noopener noreferrer" className="repo-action">
                    <Star size={14} /> Star
                </a>
                <a href={`${project.url}/fork`} target="_blank" rel="noopener noreferrer" className="repo-action"> {/* Corrected fork link */}
                    <GitFork size={14} /> Fork
                </a>
            </div>
        </div>
    );
};

export default ProjectTile;