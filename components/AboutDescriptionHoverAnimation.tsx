'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GetHoverStates } from '@/lib/helpers';
import AboutDescription from "@/components/AboutDescription";
import { ScrollWheel } from '@/components/AboutTechStack';


/**
 * AboutDescriptionHoverAnimation component
 * This component is responsible for animating the description of the about page
 * when the user hovers over the about tab.
 */
const AboutDescriptionHoverAnimation: React.FC<{}> = () => {
    // Get the hover states of the different tabs
    const { isAboutHovered, isPortfolioHovered, isResumeHovered } = GetHoverStates();
    // Animation controls for the path and the description
    const controls = useAnimation();
    const aboutDescriptionAnimation = useAnimation();

    /**
     * Effect hook to handle the animation when the user hovers over the about tab.
     * It starts the animation of the path and the description.
     */
    useEffect(() => {
        if (isAboutHovered) {
            aboutDescriptionAnimation.start({
                opacity: 1,
                scale: 1,
                transition: { delay: 0.3 },
                x:60
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
        // Container for the svg and the description
        <div className="relative flex justify-center">
            {/* If the user is not hovering over the portfolio or resume tabs, show the svg */}
            {!isPortfolioHovered && !isResumeHovered && 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    className="w-96 h-96"
                >
                    {/* Motion path that animates when the user hovers over the about tab */}
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
            }
            {/* Motion div that contains the description and the scroll wheel */}
            <motion.div
                className="absolute"
                animate={aboutDescriptionAnimation}
                initial={{ opacity: 0 }}
            >
                {/* Description of the about page */}
                <AboutDescription />
                {/* Scroll wheel component */}
                <ScrollWheel />
            </motion.div>
        </div>
    );
};

export default AboutDescriptionHoverAnimation;

