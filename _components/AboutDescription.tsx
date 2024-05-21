'use client'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { getHoverStates } from './Header';

const AboutDescription: React.FC<{ homePage: boolean }> = ({ homePage }) => {
    const { isAboutHovered } = getHoverStates();
    const controls = useAnimation();

    useEffect(() => {
        if (isAboutHovered) {
            controls.start({
                d: "M5,190 A64,0 0 1,1 195,190",
                transition: { duration: 0.5 }
            });
        } else {
            controls.start({
                d: "M5,190 A64,64 0 1,1 195,190",
                transition: { duration: 0.5 }
            });
        }
    }, [isAboutHovered, controls]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-96 h-96"
        >
            <motion.path
                fill="none"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5,190 A64,64 0 1,1 195,190"
                initial={false}
                animate={controls}
                transform="rotate(90 100 100)"
            />
        </svg>
    );
};

export default AboutDescription;

