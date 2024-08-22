import React from 'react';

function ProjectCard({ project }) {
    return (
        <div className="group relative bg-cover bg-center h-60 w-full rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
             style={{ backgroundImage: `url(${project.image})` }}>
            <div
                className= {`absolute inset-0 bg-gray-900 bg-opacity-40 transition duration-500 ease-in-out ${project.color} flex items-center justify-center`}>
                <div
                    className="text-white text-center transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold">{project.name}</h3>
                </div>
                <div className="px-4 text-white text-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center flex-col">
                    <p className={"mb-10"}>{project.description}</p>
                    <a href={project.link}>
                        <button className="border border-white hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
