'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image";
import dynamic from "next/dynamic";

import { IoLink } from "react-icons/io5";
import { HiDocument } from "react-icons/hi";
import Link from "next/link";
const SocialIcon = dynamic(() => import('react-social-icons').then(mod => mod.SocialIcon), { ssr: false });

/**
 * PortfolioItem component displays a single portfolio item with its details.
 *
 * @param {Object} props - The component props.
 * @param {number} props.ProjectIndex - The index of the project in the projects array.
 * @param {number} props.width - The width of the portfolio item.
 * @param {number} props.height - The height of the portfolio item.
 * @returns {JSX.Element} The rendered PortfolioItem component.
 */
const PortfolioItem: React.FC<{ProjectIndex: number, width: number, height: number}> = ({ProjectIndex = 0, width = 0, height = 0}) => {
    // Array of projects
    const projects = [
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: ['AWS'], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
    ];
    // State to track if the component is mounted on the client side
    const [isClient, setIsClient] = useState(false);

    // Effect hook to set isClient to true when the component mounts
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div
            className={`bg-gray-300 rounded-lg shadow-lg overflow-hidden relative hover:shadow-2xl`}
            style={{ height: `${height}px`, width: `${width}px`}}
        >
            {/* Image of the project */}
            <div className="w-full h-1/2 relative overflow-hidden">
                <Image 
                    src={`/ProjectAssets/${projects[ProjectIndex].image}`} 
                    alt={`${projects[ProjectIndex].name}`}
                    width={width}
                    height={height}
                />
            </div>
            {/* Project name and main stack icons */}
            <div className="p-2 flex justify-between items-center">
                <div>{projects[ProjectIndex].name}</div>
                <div className="flex">
                    {/* Map through the main stack icons and display them */}
                    {projects[ProjectIndex].mainStack.map((icon, index) => (
                        <Image key={index} src={`/Icons/${icon}.svg`} alt={`${icon}`} width={20} height={20} className="mr-2" />
                    ))}
                </div>
            </div>

            {/* Project description */}
            <div className="p-2 text-sm">{projects[ProjectIndex].description}</div>

            {/* If the component is mounted on the client side, show the project links */}
            {isClient && (
                <div className="absolute bottom-0 right-0 p-1 flex items-center">
                    {/* Link to the post */}
                    <Link href={`${projects[ProjectIndex].post}`} passHref>
                        <HiDocument size={24} className=""/>
                    </Link>
                    {/* GitHub icon with link */}
                    <div className="bg-white bg-opacity-0 rounded-full p-1">
                        <SocialIcon
                            target="_blank"
                            network="github"
                            url={`${projects[ProjectIndex].github}`}
                            bgColor="transparent"
                            fgColor="#000000"
                        />
                    </div>
                    {/* Link to the live project */}
                    {projects[ProjectIndex].live &&
                        <Link href={`${projects[ProjectIndex].live}`} passHref>
                            <IoLink size={24} className="mr-2"/>
                        </Link>
                    }
                </div>
            )}
        </div>

    );
}

export default PortfolioItem;