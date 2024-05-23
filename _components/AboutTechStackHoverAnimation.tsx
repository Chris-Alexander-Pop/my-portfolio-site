'use client'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { GetHoverStates } from './Header';
import { TechnologyTemplate, } from './AboutTechStack';


const AboutTechStackHoverAnimation: React.FC<{}> = () => {
    const { isAboutHovered } = GetHoverStates();
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
        <div className="">
        
        </div>
    );
};


export default AboutTechStackHoverAnimation;

