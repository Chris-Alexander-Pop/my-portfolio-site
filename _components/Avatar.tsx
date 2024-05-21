'use client'
import { motion } from 'framer-motion';
import { getHoverStates } from './Header';
import Image from 'next/image';
import React from 'react';

const Avatar: React.FC<{ canAnimate: boolean }> = ({ canAnimate }) => {
    const { isAboutHovered, isResumeHovered, isPortfolioHovered } = getHoverStates();

    const variants = {
        resting: { scale: 1, rotate: 0, opacity: 1, x: 0 },
        aboutAnimation: { scale: 1, rotate: 0, opacity: 1, x: -350 },
        resumeAnimation: { scale: 0.8, rotate: 0, opacity: 0.7 },
        portfolioAnimation: { scale: 1.5, rotate: 0, opacity: 0.3 },
    };

    if (!canAnimate) {
        for (const key in variants) {
            variants[key as keyof typeof variants] = { scale: 1, rotate: 0, opacity: 1, x: 0 };
        }
    }

    return (
        <motion.div
            className="flex items-center justify-center"
            initial="resting"
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
            variants={variants}
        >
            <div className="relative">
                   <Image src="/avatar.png" alt="Avatar" width={384} height={384} className="object-cover rounded-full overflow-hidden border-8 border-black" />
            </div>
        </motion.div>
    );
};

export default Avatar;
