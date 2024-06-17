'use client';

import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { GetHoverStates } from '@/lib/helpers.js';
import PortfolioItem from './PortfolioItem';

export const PortfolioAnimationLeft: React.FC<{}> = () => {
    const { isAboutHovered, isPortfolioHovered, isResumeHovered } = GetHoverStates();
    const controls = useAnimation();

    useEffect(() => {
        if (isPortfolioHovered) {
            controls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 }
            });
        } else {
            controls.start({
                opacity: 0,
                x: -1000,
                transition: { duration: 1, delay: 0.5 }
            });
        }
    }, [isPortfolioHovered, controls]);

    return (
        <AnimatePresence>
            {isPortfolioHovered && (
                <motion.div
                    initial={{ opacity: 0, x: -1000, y: -150 }}
                    animate={controls}
                    className="absolute"
                    style={{ display: 'flex' }}
                >
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={300} height={300} />
                    </div>
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={500} height={300} />
                    </div>
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={400} height={300} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


export const PortfolioAnimationRight: React.FC<{}> = () => {
    const { isAboutHovered, isPortfolioHovered, isResumeHovered } = GetHoverStates();
    const controls = useAnimation();

    useEffect(() => {
        if (isPortfolioHovered) {
            controls.start({
                opacity: 1,
                x: 0, 
                transition: { duration: 1, delay: 0.5 }
            });
        } else {
            controls.start({
                opacity: 0,
                x: 1000, 
                transition: { duration: 1, delay: 0.5 }
            });
        }
    }, [isPortfolioHovered, controls]);

    return (
        <AnimatePresence>
            {isPortfolioHovered && (
                <motion.div
                    initial={{ opacity: 0, x: 1000, y: 200 }}
                    animate={controls}
                    className="absolute"
                    style={{ display: 'flex' }}
                >
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={500} height={300} />
                    </div>
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={400} height={300} />
                    </div>
                    <div style={{ padding: '20px' }}>
                        <PortfolioItem ProjectIndex={0} width={300} height={300} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};