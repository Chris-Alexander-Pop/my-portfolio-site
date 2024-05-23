'use client'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { GetHoverStates } from './Header';
import AboutDescription from "@/_components/AboutDescription";


const AboutDescriptionHoverAnimation: React.FC<{}> = () => {
    const { isAboutHovered } = GetHoverStates();
    const controls = useAnimation();
    const aboutDescriptionAnimation = useAnimation();

    useEffect(() => {
        if (isAboutHovered) {
            aboutDescriptionAnimation.start({
                opacity: 1,
                scale: 1,
                transition: { delay: 0.3 },
                x:30
              });
            controls.start({
                d: "M2,192 A64,0 0 1,1 198,192",
                transition: { duration: 0.5 }
            });
        } else {
            aboutDescriptionAnimation.start({ opacity: 0, scale: 0, x:0, transition: {duration: 0} });
            controls.start({
                d: "M2,192 A64,64 0 1,1 198,192",
                transition: { duration: 0.1 }
            });
        }
    }, [isAboutHovered, controls, aboutDescriptionAnimation]);

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
            
            <motion.div
                className="absolute"
                animate={aboutDescriptionAnimation}
                initial={{ opacity: 0 }}
            >
                <AboutDescription />
                <AboutDescription /><AboutDescription />
            </motion.div>
        </div>
    );
};

export default AboutDescriptionHoverAnimation;

