'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GetHoverStates } from '@/lib/helpers';
import AboutDescription from "@/components/AboutDescription";
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
    const [isClient, setIsClient] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const avatarVariants = {
        resting: { scale: 1, rotate: 0, opacity: 1, x: 0, y: 0, transition: { duration: 1, x: { bounce: 0 }, bounce: 0 } },
        resumeAnimation: { scale: 0.8, rotate: 0, opacity: 1, x: -35, transition: { duration: 0.3, x: { bounce: 0 }, bounce: 0 } },
        portfolioAnimation: { scale: 1, rotate: 0, opacity: 0, y: 1500, transition: { duration: 2, y: { bounce: 0 }, bounce: 0 } },
      };

    /**
     * Effect hook to handle the animation when the user hovers over the about tab.
     * It starts the animation of the path and the description.
     */
    useEffect(() => {
        if (((isAboutHovered && !getVariable('PortfolioAnimationState')) || (!isAboutHovered && getVariable('AboutDescriptionAnimationState') && !isResumeHovered && !isPortfolioHovered && getLastHovered() === 'about'))) {
            setIsClient(true);
            aboutDescriptionAnimation.start({ opacity: 1, scale: 1, x:60, transition: { duration: 0.7, bounce: 0, x: { bounce: 0 } } });
            controls.start({
                d: "M2,192 A64,0 0 1,1 198,192",
                transition: { duration: 0.3 }
            });
        } else {
            setIsClient(false);
            aboutDescriptionAnimation.start({ opacity: 0, scale: 0, x:-30, transition: { duration: 0.05, bounce: 0, x: { bounce: 0 } } });
            controls.start({
                d: "M2,192 A64,64 0 1,1 198,192",
                transition: { duration: 0.3 }
            });
        }
    }, [isAboutHovered, controls, aboutDescriptionAnimation, avatarVariants, getVariable, isResumeHovered, isPortfolioHovered, getLastHovered]);

    return (
        <motion.div 
        initial="resting"
            // Set the animation variant based on the hover state
            animate={
                ((isAboutHovered && !getVariable('PortfolioAnimationState')) || (!isAboutHovered && getVariable('AboutDescriptionAnimationState') && !isResumeHovered && !isPortfolioHovered && getLastHovered() === 'about'))
                ? 'resting'
                : (isResumeHovered || (!isResumeHovered && getVariable('ResumeAnimationState') && !isAboutHovered && !isPortfolioHovered && getLastHovered() === 'resume'))
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
                    {!isPortfolioHovered && isClient && 
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
                    </motion.div>
                }
            </div>
        </motion.div>
    );
};

export default AboutDescriptionHoverAnimation;

