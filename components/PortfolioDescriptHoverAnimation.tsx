'use client';

import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { GetHoverStates } from '@/lib/helpers';
import PortfolioItem from './PortfolioItem';

/**
 * Component for displaying portfolio items when the portfolio is hovered.
 * Displays three portfolio items to the left of the portfolio button.
 */
export const PortfolioAnimationLeft: React.FC<{}> = () => {
    // Get the hover states for the portfolio, about, and resume buttons.
    const { isAboutHovered, isPortfolioHovered, isResumeHovered } = GetHoverStates();
    // Animation controls for the portfolio items.
    const controls = useAnimation();

    // Use effect to handle the animation when the portfolio button is hovered.
    useEffect(() => {
        // If the portfolio button is hovered, animate the portfolio items to the left.
        if (isPortfolioHovered) {
            controls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 }
            });
        } else {
            // If the portfolio button is not hovered, animate the portfolio items to the right.
            controls.start({
                opacity: 0,
                x: -1000,
                transition: { duration: 1, delay: 0.5 }
            });
        }
    }, [isPortfolioHovered, controls]);

    return (
        <AnimatePresence>
            {/* If the portfolio button is hovered, display the portfolio items. */}
            {isPortfolioHovered && (
                <motion.div
                    initial={{ opacity: 0, x: -1000, y: -150 }} 
                    animate={controls}  
                    className="absolute"  
                    style={{ display: 'flex' }}  
                >
                    {/* Display the first portfolio item. */}
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={300} height={300} />
                    </div>
                    {/* Display the second portfolio item. */}
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={500} height={300} />
                    </div>
                    {/* Display the third portfolio item. */}
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={400} height={300} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// Component for displaying portfolio items when the portfolio button is hovered to the right of the portfolio button.
export const PortfolioAnimationRight: React.FC<{}> = () => {
    // Get the hover states for the portfolio, about, and resume buttons.
    const { isAboutHovered, isPortfolioHovered, isResumeHovered } = GetHoverStates();
    // Animation controls for the portfolio items.
    const controls = useAnimation();

    // Effect hook to handle the animation when the portfolio button is hovered.
    useEffect(() => {
        if (isPortfolioHovered) {
            // If the portfolio button is hovered, animate the portfolio items to the right.
            controls.start({
                opacity: 1,
                x: 0, 
                transition: { duration: 1, delay: 0.5 }
            });
        } else {
            // If the portfolio button is not hovered, animate the portfolio items to the left.
            controls.start({
                opacity: 0,
                x: 1000, 
                transition: { duration: 1, delay: 0.5 }
            });
        }
    }, [isPortfolioHovered, controls]);

    return (
        <AnimatePresence>
            {/* If the portfolio button is hovered, display the portfolio items. */}
            {isPortfolioHovered && (
                <motion.div
                    initial={{ opacity: 0, x: 1000, y: 200 }}
                    animate={controls}
                    className="absolute"
                    style={{ display: 'flex' }}
                >
                    {/* Display the first portfolio item. */}
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={500} height={300} />
                    </div>
                    {/* Display the second portfolio item. */}
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={400} height={300} />
                    </div>
                    {/* Display the third portfolio item. */}
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={300} height={300} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
