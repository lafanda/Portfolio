import React, { useState } from 'react';
import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
        {link: 'https://github.com/Suggestify/SuggestifyApp', image: 'photos/projects/Suggestify.jpeg', name: "Suggestify", description: "An AI Powered Mobile Application for Personalized Recommendations Across Various Entertainment Mediums", color: "group-hover:bg-red-950"},
        {link: 'https://yazan-hailat-1a1589b687cb.herokuapp.com/', image: 'photos/projects/portfolio.png', name: "Personal Blog", description: "My Full Stack Personal Blog and ex-Portfolio", color: "group-hover:bg-slate-800"},
        {link: 'https://discord.com/oauth2/authorize?client_id=1121215065241157644&permissions=8&scope=bot%20applications.commands', image: 'photos/projects/mcBot.png', name: "Minecraft Discord Bot", description: "A Discord Bot For Easily Storing and Retrieving in Game Coordinates", color: "group-hover:bg-pink-950"},
        {link: 'https://github.com/lafanda/ChromeExt', image: 'photos/projects/imdb.jpg', name: "IMDB Chrome Extension", description: "Generates a Graph of TV Show Episodes by Rating over Time To Measure TV Show Quality Shifts", color: "group-hover:bg-yellow-900"},
        {link: 'https://github.com/YamenMoh-123/Chess_Server', image: 'photos/projects/chess.png', name: "Online Chess", description: "A Peer to Peer online Chess Game Made in Java Swing", color: "group-hover:bg-violet-950"},
        {link: `https://github.com/lafanda/Trials`, image: 'photos/projects/Trials.png', name: "Zelda Remake", description: "A Python Interpreted-Remake of the classic Legends of Zelda", color: "group-hover:bg-green-900"},
        {link: `https://github.com/lafanda/TronLightCycle`, image: 'photos/projects/Tron.png', name: "Tron Light Cycle Remake", description: "A PvE Remake of The Retro Video Game Tron Light Cycle in Java Swing", color: "group-hover:bg-neutral-900"},
        {link: 'https://github.com/lafanda/YazansCasino', image: 'photos/projects/casino.png', name: "Casino Simulator Game", description: "A Java Remake of Various Casino Games", color: "group-hover:bg-gray-700"},
        {link: 'https://github.com/lafanda/NarutoPaint', image: 'photos/projects/paint.png', name: "Python MS Paint Remake", description: "A Themed ms-paint Remake in Python", color: "group-hover:bg-blue-700"}
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
            <p className="text-lg text-gray-600">Here are a few projects I've worked on recently. And there's more coming soon!</p>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.slice(0, isExpanded ? projects.length : 6).map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))}
                </div>
                <div className="mt-4 flex justify-center">
                    <button onClick={toggleProjectsDisplay}
                            className="text-black font-bold py-2 px-4 rounded">
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Projects;
