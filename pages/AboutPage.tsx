'use client'

import Avatar from "@/components/Avatar";
import Header from "@/components/Header";
import { HoverProvider } from "@/contexts/HoverContext";
import { BlogData, BlogDataCollection, Blogs } from "@/lib/helpers";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

/**
 * AboutPage component is the page that displays information about the developer.
 * It uses the HoverProvider context to provide the hover state to its child components.
 * The page is animated using the Framer Motion library.
 *
 * @returns {JSX.Element} The AboutPage component.
 */
export default function AboutPage() {
    // Initialize animation controls
    const controls = useAnimation();
    const allBlogs = Blogs('', true) as BlogDataCollection;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    // Function to handle search and filters
    const filteredBlogs = Object.keys(allBlogs).filter((key) => {
        const blog = allBlogs[key];
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = selectedTypes.length === 0 || selectedTypes.includes(blog.type);
        return matchesSearch && matchesFilter;
    });


    // Define animation variants
    const variants = {
        // Variant for when the page is visible
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
            display: "true"
        },
        // Variant for when the page is initially hidden
        initial: {
            opacity: 0,
            y: 10,
            display: "none"
        },
    };

    // Set initial animation state and start the animation when controls change
    useEffect(() => {
        controls.set("initial");
        controls.start("visible");
    }, [controls]);

    // Return the AboutPage component
    // Return the AboutPage component
    return (
        <HoverProvider>
            {/* Animate the page using the Framer Motion library */}
            <motion.div layout animate={controls} variants={variants}>
                {/* Render the Header component with the isHome prop set to false */}
                <Header isHome={false} />
                <div className="relative flex h-90vh overflow-hidden">
                    <div className="absolute flex justify-center w-full px-12 z-40">
                        {/* Render the Avatar component with the canAnimate prop set to true */}
                        <div className="w-2/5 fixed left-4 transform translate-y-1/3">
                            <Avatar canAnimate={false} />
                        </div>
                        
                        <div className="w-1/2 p-4 overflow-y-auto max-h-svh fixed right-4">
                            {/* Search Bar and Filters */}
                            <div className="mb-4 sticky top-0">
                                <div className="flex space-x-4 mb-4 bg-gray-100 p-4 rounded-lg shadow-md z-50">
                                <div className="absolute -top-4 -left-4 -right-4 bg-white h-24 -z-10"></div>
                                    <input
                                        type="text"
                                        placeholder="Search blogs..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="border rounded-lg px-4 py-2 w-4/5"
                                    />
                                    <div className="flex flex-col space-y-2">
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedTypes.includes('technical')}
                                                onChange={() => setSelectedTypes(prev =>
                                                    prev.includes('technical')
                                                        ? prev.filter(type => type !== 'technical')
                                                        : [...prev, 'technical']
                                                )}
                                            />
                                            <span>Technical</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedTypes.includes('personal')}
                                                onChange={() => setSelectedTypes(prev =>
                                                    prev.includes('personal')
                                                        ? prev.filter(type => type !== 'personal')
                                                        : [...prev, 'personal']
                                                )}
                                            />
                                            <span>Personal</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Render the filtered list of blogs */}
                            <ul className="space-y-4">
                                {filteredBlogs.map((key: string) => (
                                    <li
                                        key={key}
                                        className="bg-gray-100 rounded-lg shadow-md p-4 flex justify-between items-center hover:bg-gray-200 cursor-pointer"
                                        onMouseDown={() => window.open(`/blogs/${key}`)}
                                    >
                                        <div>
                                            <span className="text-gray-900 font-bold">
                                                {allBlogs[key].title}
                                            </span>
                                            <br />
                                            {allBlogs[key].name}
                                        </div>
                                        <div className="flex space-x-2">
                                            {allBlogs[key].stack?.map((stackItem: string, index: any) => (
                                                <Image key={index} src={stackItem} alt={`${allBlogs[key].name} icon`} width={24} height={24} />
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </HoverProvider>
    );
}
