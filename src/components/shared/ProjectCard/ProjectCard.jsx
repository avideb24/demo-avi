import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ProjectCard = ({ project }) => {
    
    return (
        <div className="relative group">
            <div className="w-full h-full">
                <Image
                    src={project?.image}
                    width={500}
                    height={400}
                    alt="project image"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Project Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center opacity-0 scale-90 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto text-xs md:text-sm space-y-2">
                <p className="text-white text-xs md:text-sm">
                    Project Name: <span className="text-yellow-500 text-base font-bold">{project?.name}</span>
                </p>
                <p>Type: {project?.type}</p>
                <p>Techs: {project?.techs}</p>
                <p>Date: {project?.date}</p>
                <div className="space-x-4 pt-3">
                    {project?.liveLink && (
                        <Link href={project.liveLink} target="_blank">
                            <span className="bg-yellow-500 text-black px-3 py-1 md:py-2 rounded hover:bg-transparent hover:text-yellow-500 border border-yellow-500 transition cursor-pointer">
                                Live Link
                            </span>
                        </Link>
                    )}
                    {/* {project?.githubClient && (
                        <Link href={project.githubClient} target="_blank">
                            <span className="bg-yellow-500 text-black px-3 py-2 rounded hover:bg-transparent hover:text-yellow-500 border border-yellow-500 transition cursor-pointer">
                                Github-Client
                            </span>
                        </Link>
                    )}
                    {project?.githubServer && (
                        <Link href={project.githubServer} target="_blank">
                            <span className="bg-yellow-500 text-black px-3 py-2 rounded hover:bg-transparent hover:text-yellow-500 border border-yellow-500 transition cursor-pointer">
                                Github-Server
                            </span>
                        </Link>
                    )}
                    {project?.github && !project?.githubClient && !project?.githubServer && (
                        <Link href={project.github} target="_blank">
                            <span className="bg-yellow-500 text-black px-3 py-2 rounded hover:bg-transparent hover:text-yellow-500 border border-yellow-500 transition cursor-pointer">
                                Github
                            </span>
                        </Link>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
