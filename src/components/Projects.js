import React, { useState } from 'react';
import './Projects.css';
import learnOsource from '../assets/Learnosource.png';
import wanderLust from '../assets/wanderLust.png';
import game2048 from '../assets/game2048.png';
import quizzy from '../assets/quizzy.png';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Learn-O-Source",
            description: "An open-source learning platform.",
            github: "https://github.com/astro-dally/Learn-O-Source",
            live: "https://learn-o-source.vercel.app/",
            image: learnOsource
        },
        {
            title: "WanderLust-AI Trip Planner",
            description: "An AI-powered trip planning application.",
            github: "https://github.com/astro-dally/WanderLust",
            live: "https://gen-ai-trip-planner-gen-ai-workshop-phaxz2xakao8.vercel.app/",
            image: wanderLust
        },
        {
            title: "2048-Game",
            description: "A classic 2048 game.",
            github: "https://github.com/astro-dally/2048-Game",
            live: "https://astro-dally.github.io/2048-Game/",
            image: game2048
        },
        {
            title: "QuizZy",
            description: "An interactive quiz application.",
            github: "https://github.com/astro-dally/QuizZy",
            live: "https://astro-dally.github.io/QuizZy/",
            image: quizzy
        }
    ];

    const handleProjectClick = (index) => {
        setSelectedProject(index === selectedProject ? null : index);
    };

    return (
        <div className="projects" id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project" onClick={() => handleProjectClick(index)}>
                        <div className="project-circle">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h3>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">{project.title}</a>
                        </h3>
                        {selectedProject === index && (
                            <div className="project-details">
                                <p>{project.description}</p>
                                <div className="project-links">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
