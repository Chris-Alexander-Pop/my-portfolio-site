'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { GetHoverStates } from '@/lib/helpers';
import Image from 'next/image';

/**
 * LineAnimation component
 * This component displays a set of lines that animate when the user hovers over the resume tab.
 * Each line is represented by a motion div that rotates and scales based on the index.
 * If the user is hovering over the resume tab, the lines are scaled and an icon is displayed next to each line.
 */
const LineAnimation: React.FC<{}> = () => {
    // Get the hover states of the different tabs
    const { isAboutHovered, isPortfolioHovered, isResumeHovered } = GetHoverStates();
    // Animation controls for the lines and the icons
    const controls = useAnimation();
    const aboutResumeAnimation = useAnimation();

    // Create an array of length 6 to represent the 6 lines
    const lines = Array.from({ length: 6 });
    // Array of icons to display next to each line
    const icons = [
        '/getupgraded-logo.png',
        '/Icons/React.svg',
        '/Icons/React.svg',
        '/Icons/React.svg',
        '/Icons/React.svg',
        '/Icons/React.svg',
        '/Icons/React.svg',
        '/Icons/React.svg',
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Map over the lines array to create a motion div for each line */}
            {lines.map((_, index) => {
                // Calculate the angle of rotation for each line based on the index
                const angle = (360 / lines.length) * index;
                return (
                    <motion.div
                        key={index}
                        // Set the initial and animate values for the line based on whether the user is hovering over the resume tab
                        initial={{ scaleX: 0 }}
                        animate={isResumeHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                        // Set the transition values for the line
                        transition={{ duration: 0.9, delay: index * 0.05 }}
                        className="absolute w-1 h-120 bg-black"
                        style={{ rotate: `${angle}deg` }}
                    >
                        {/* If the user is hovering over the resume tab, display an icon next to each line */}
                        {isResumeHovered &&
                            <motion.div 
                            className="relative w-24 h-24"
                            // Set the initial and animate values for the icon based on whether the user is hovering over the resume tab
                            initial={{ scale: 0 }}
                            animate={isResumeHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: -2 }}
                            // Set the transition values for the icon
                            transition={{ duration: 0.1, delay: index * 0.15 }}
                            >
                                <Image
                                    src={icons[index]}
                                    alt={`Icon ${index}`}
                                    layout="fill"
                                    objectFit="contain"
                                    className="absolute top-0 left-0 transform translate-y-[-100%] translate-x-[-50%]"
                                />
                            </motion.div>
                        }
                    </motion.div>
                );
            })}
        </div>
    );
};

export default LineAnimation;
