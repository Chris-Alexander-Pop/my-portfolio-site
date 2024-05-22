'use client'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { getHoverStates } from './Header';
import AboutDescription from "@/_components/AboutDescription";


const AboutDescriptionHoverAnimation: React.FC<{}> = () => {
    const { isAboutHovered } = getHoverStates();
    const controls = useAnimation();

    useEffect(() => {
        if (isAboutHovered) {
            controls.start({
                d: "M2,192 A64,0 0 1,1 198,192",
                transition: { duration: 0.5 }
            });
        } else {
            controls.start({
                d: "M2,192 A64,64 0 1,1 198,192",
                transition: { duration: 0.1 }
            });
        }
    }, [isAboutHovered, controls]);

    return (
        <div className="relative flex justify-center">
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
                    d="M2,192 A64,64 0 1,1 198,192"
                    initial={false}
                    animate={controls}
                    transform="rotate(90 100 100)"
                />
            </svg>
            {isAboutHovered && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <AboutDescription />
                </div>
            )}
        </div>
    );
};

export default AboutDescriptionHoverAnimation;

