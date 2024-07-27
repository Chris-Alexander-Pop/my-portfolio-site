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
        {name: "Digital Portfolio", description: "Personal Project Website and Portfolio built to house my projects and experiences.", image: "Project1.png", mainStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'FramerMotion', 'Vercel', 'GitHub'], post: '', github: 'https://github.com/Chris-Alexander-Pop/my-portfolio-site', live: 'https://chrispop.vercel.app/'},
        {name: "Upgraded", description: "At Upgraded, I worked on modernizing a web scraper, optimized application performance, engineering a mobile app scraper, automated billing for clients, and revamped a grant auto-draft feature.", image: "Project1.png", mainStack: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'TailwindCSS', 'Selenium', 'Airtable', 'OpenAI', 'Stripe', 'OpenCV', 'Vercel', 'GitHub'], post: '', github: '', live: 'https://www.getupgraded.ca/'},
        {name: "Vahana", description: "Vahana is a team project focused on providing an affordable and environmentally sustainable carpooling platform for students. As the project lead, I directed the backend and app development efforts, ensuring the platform meets the needs of its users while aligning with our deployment plans for the US and Canada.", image: "Project1.png", mainStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Kotlin', 'Swift', 'JetpackCompose', 'AndroidStudio', 'AWS', 'Amplify', 'AppSync', 'GraphQL', 'Cognito', 'Lambda', 'APIGateway', 'DynamoDB', 'QLDB', 'S3Bucket', 'Stripe', 'GitHub'], post: '', github: '', live: ''},
        {name: "PosturePal", description: "PosturePal is a wearable 'smart' posture corrector designed to help scoliosis patients recovering from spinal fusion surgery maintain proper sitting posture.", image: "Project1.png", mainStack: ['CPlusPlus', 'STM32', 'AutoCAD', 'GitHub'], post: '', github: 'https://github.com/Chris-Alexander-Pop/PosturePal', live: ''},
        {name: "Bluetooth Model Car", description: "A remote controlled model car made in C++ using Arduino and communication via Bluetooth modules and Python.", image: "Project1.png", mainStack: ['CPlusPlus', 'Arduino', 'Python'], post: '', github: '', live: ''},
        {name: "Knights of the Citadel", description: "A tower defense, real-time strategy game where players use spells and defense towers to protect their main tower from waves of enemies.", image: "Project1.png", mainStack: ['Python', 'GitHub', "VSCode"], post: '', github: 'https://github.com/Chris-Alexander-Pop/Knights-of-the-Citadel', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: ['AWS'], post: '', github: '', live: ''},
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
            <div className="px-2 py-1 flex justify-between items-center">
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
                    {projects[ProjectIndex].post &&
                        <Link href={`${projects[ProjectIndex].post}`} passHref>
                            <HiDocument size={24} className=""/>
                        </Link>
                    }
                    {/* GitHub icon with link */}
                    {projects[ProjectIndex].github &&
                        <div className="bg-white bg-opacity-0 rounded-full p-1">
                            <SocialIcon
                                target="_blank"
                                network="github"
                                url={`${projects[ProjectIndex].github}`}
                                bgColor="transparent"
                                fgColor="#000000"
                            />
                        </div>
                    }
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