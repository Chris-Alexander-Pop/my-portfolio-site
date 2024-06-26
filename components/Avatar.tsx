'use client'
import { motion } from 'framer-motion';
import { GetHoverStates } from '@/lib/helpers';
import Image from 'next/image';
import React from 'react';

/**
 * Avatar component
 * This component displays the avatar of the user
 * The avatar animates when the user hovers over different tabs
 * @param {boolean} canAnimate - Determines whether animations are enabled
 * @returns {JSX.Element} The Avatar component
 */
const Avatar: React.FC<{ canAnimate: boolean }> = ({ canAnimate }) => {
    // Get the hover states of the different tabs
    const { isAboutHovered, isResumeHovered, isPortfolioHovered } = GetHoverStates();

    // Define the animation variants for the avatar
    const avatarVariants = {
        resting: { scale: 1, rotate: 0, opacity: 1, x: 0, transition: {duration: 0.3} },
        aboutAnimation: { scale: 1, rotate: 0, opacity: 1, x: -350, transition: { duration: 0.3, ease: "easeInOut" } },
        resumeAnimation: { scale: 0.8, rotate: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
        portfolioAnimation: { scale: 0, rotate: 0, opacity: 1, transition: { duration: 1, ease: "easeIn" } },
      };

    // If animations are disabled, set all animation variants to their resting state
    if (!canAnimate) {
        for (const key in avatarVariants) {
            avatarVariants[key as keyof typeof avatarVariants] = { scale: 1, rotate: 0, opacity: 1, x: 0, transition: {duration: 0, ease: ""} };
        }
    }

    return (
        <motion.div
            className="flex items-center justify-center"
            initial="resting"
            // Set the animation variant based on the hover state
            animate={
                canAnimate
                    ? isAboutHovered
                        ? 'aboutAnimation'
                        : isResumeHovered
                        ? 'resumeAnimation'
                        : isPortfolioHovered
                        ? 'portfolioAnimation'
                        : 'resting'
                    : 'resting'
            }
            variants={avatarVariants}
        >
            <div className="relative">
                <Image 
                    src="/avatar.png" 
                    alt="Avatar" 
                    width={384} 
                    height={384} 
                    priority={true} 
                    className="object-cover rounded-full overflow-hidden border-8 border-black"
                />
            </div>
        </motion.div>
    );
};

export default Avatar;
