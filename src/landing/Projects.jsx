import React, { useState } from 'react';
import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
        {image: 'photos/projects/Suggestify.jpeg', name: "Suggestify", description: "An AI Powered Mobile Application for Personalized Recommendations Across Various Entertainment Mediums", color: "red-950"},
        {image: 'photos/projects/portfolio.png', name: "Personal Blog", description: "A Simple blog", color: "slate-800"},
        {image: 'photos/projects/mcBot.png', name: "Minecraft Discord Bot", description: "A Discord Bot For Easily Storing and Retrieving in Game Coordinates", color: "pink-950"},
        {image: 'photos/projects/imdb.jpg', name: "IMDB Chrome Extension", description: "Generates a Graph of TV Show Episodes by Rating over Time", color: "yellow-900"},
        {image: 'photos/projects/chess.png', name: "Online Chess", description: "A Peer to Peer online Chess Game", color: "violet-950"},
        {image: 'photos/projects/Trials.png', name: "Zelda Remake", description: "A Python Remake of the classic Legends of Zelda", color: "green-900"},
        {image: 'photos/projects/Tron.png', name: "Tron Light Cycle Remake", description: "A PvE Remake of The Classic Tron Light Cycle in Java", color: "neutral-900"},
        {image: 'photos/projects/imdb.jpg', name: "Casino Simulator Game", description: "A Java Remake of Various Casino Games as Well as Mine Sweeper", color: "neutral-900"},
        {image: 'photos/projects/imdb.jpg', name: "Python MS Paint Remake", description: "A Java Remake of Various Casino Games as Well as Mine Sweeper", color: "neutral-900"}
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleProjectsDisplay = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={"mt-20 text-center"}>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-amber-600">
                My Recent Work
            </h2>
            <p className="text-lg text-gray-600">Here are a few projects I've worked on recently. Want to see more?
                Email me.</p>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.slice(0, isExpanded ? projects.length : 6).map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <div className="mt-4 flex justify-center">
                    <div className={`cursor-pointer text-lg font-bold py-2 px-4 rounded inline-flex items-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                         onClick={toggleProjectsDisplay}>
                        <span className="mr-2">{isExpanded ? 'Collapse' : 'Expand'}</span>
                        <svg className="fill-current w-6 h-6" viewBox="0 0 20 20">
                            <path d="M13 10V3H7v7H2l8 8 8-8h-5z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
