'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image";
import dynamic from "next/dynamic";

import { IoLink } from "react-icons/io5";
import { HiDocument } from "react-icons/hi";
import Link from "next/link";
const SocialIcon = dynamic(() => import('react-social-icons').then(mod => mod.SocialIcon), { ssr: false });

const PortfolioItem: React.FC<{ProjectIndex: number, width: number, height: number}> = ({ProjectIndex = 0, width = 0, height = 0}) => {
    const projects = [
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: ['AWS'], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
        {name: "Project 1", description: "This is project 1", image: "Project1.png", mainStack: [''], post: '', github: '', live: ''},
    ];
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div
            className={`bg-gray-300 rounded-lg shadow-lg overflow-hidden relative hover:shadow-2xl`}
            style={{ height: `${height}px`, width: `${width}px`}}
        >
            <div className="w-full h-1/2 relative overflow-hidden">
                <Image 
                    src={`/ProjectAssets/${projects[ProjectIndex].image}`} 
                    alt={`${projects[ProjectIndex].name}`}
                    width={width}
                    height={height}
                />
            </div>
            <div className="p-2 flex justify-between items-center">
                <div>{projects[ProjectIndex].name}</div>
                <div className="flex">
                    {projects[ProjectIndex].mainStack.map((icon, index) => (
                        <Image key={index} src={`/Icons/${icon}.svg`} alt={`${icon}`} width={20} height={20} className="mr-2" />
                    ))}
                </div>
            </div>

            <div className="p-2 text-sm">{projects[ProjectIndex].description}</div>

            {isClient && (
                <div className="absolute bottom-0 right-0 p-1 flex items-center">
                    <Link href={`${projects[ProjectIndex].post}`} passHref>
                        <HiDocument size={24} className=""/>
                    </Link>
                    <div className="bg-white bg-opacity-0 rounded-full p-1">
                        <SocialIcon
                            target="_blank"
                            network="github"
                            url={`${projects[ProjectIndex].github}`}
                            bgColor="transparent"
                            fgColor="#000000"
                        />
                    </div>
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