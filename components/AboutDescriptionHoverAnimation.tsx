'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GetHoverStates } from '@/lib/helpers';
import AboutDescription from "@/components/AboutDescription";
import { ScrollWheel } from '@/components/AboutTechStack';
import { useAnimationLock } from '@/contexts/useAnimationLock';


/**
 * AboutDescriptionHoverAnimation component
 * This component is responsible for animating the description of the about page
 * when the user hovers over the about tab.
 */
const AboutDescriptionHoverAnimation: React.FC<{}> = () => {
    // Get the hover states of the different tabs
    const { isAboutHovered, isPortfolioHovered, isResumeHovered, getLastHovered } = GetHoverStates();
    // Animation controls for the path and the description
    const controls = useAnimation();
    const aboutDescriptionAnimation = useAnimation();
    const { variables, getVariable, setVariable } = useAnimationLock();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const avatarVariants = {
        resting: { scale: 1, rotate: 0, opacity: 1, x: 0, y: 0, transition: {duration: 1, x: { bounce: 0 }, bounce: 0 } },
        aboutAnimation: { scale: 1, rotate: 0, opacity: 1, x: 60, transition: { duration: 0.3, delay: 0.3, x: { bounce: 0 }, bounce: 0 } },
        resumeAnimation: { scale: 0.8, rotate: 0, opacity: 1, x: -35, transition: { duration: 0.3, x: { bounce: 0 }, bounce: 0 } },
        portfolioAnimation: { scale: 1, rotate: 0, opacity: 0, y: 1500, transition: { duration: 2, y: { bounce: 0 }, bounce: 0 } },
      };

    /**
     * Effect hook to handle the animation when the user hovers over the about tab.
     * It starts the animation of the path and the description.
     */
    useEffect(() => {
        if (isAboutHovered) {
            aboutDescriptionAnimation.start(avatarVariants['aboutAnimation']);
            controls.start({
                d: "M2,192 A64,0 0 1,1 198,192",
                transition: { duration: 0.3 }
            });
        } else {
            aboutDescriptionAnimation.start({ opacity: 0, scale: 0, x:0, transition: { duration: 0, bounce: 0, x: { bounce: 0 } } });
            controls.start({
                d: "M2,192 A64,64 0 1,1 198,192",
                transition: { duration: 0.3 }
            });
        }
    }, [isAboutHovered, controls, aboutDescriptionAnimation, avatarVariants]);

    return (
        <motion.div 
        initial="resting"
            // Set the animation variant based on the hover state
            animate={
                isResumeHovered
                        ? 'resumeAnimation'
                        : (isPortfolioHovered || (!isPortfolioHovered && getVariable('PortfolioAnimationState') && !isAboutHovered && !isResumeHovered && getLastHovered() === 'portfolio'))
                        ? 'portfolioAnimation'
                        : 'resting'
            }
            variants={avatarVariants}
            onAnimationStart={() => {setVariable('AboutDescriptionAnimationState', true)}}
            onAnimationComplete={() => {setVariable('AboutDescriptionAnimationState', false)}}
        >

            <div className="relative flex justify-center">
                <div className="relative">
                    {/* If the user is not hovering over the portfolio tabs, show the svg */}
                    {!isPortfolioHovered && 
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 200"
                            className="w-96 h-96 relative"
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
                    {/* Add more content here, fix the positioning though */}
                </div>
                {/* Motion div that contains the description and the scroll wheel */}
                {isAboutHovered && 
                    <motion.div
                        className="absolute"
                        animate={aboutDescriptionAnimation}
                        initial={{ opacity: 0 }}
                    >
                        {/* Description of the about page */}
                        <AboutDescription />
                        {/* Scroll wheel component */}
                        {/* <ScrollWheel /> */}
                    </motion.div>
                }
            </div>
        </motion.div>
    );
};

export default AboutDescriptionHoverAnimation;

