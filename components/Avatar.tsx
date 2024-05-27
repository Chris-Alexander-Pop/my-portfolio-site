'use client'
import { motion } from 'framer-motion';
import { GetHoverStates } from './Header';
import Image from 'next/image';
import React from 'react';

const Avatar: React.FC<{ canAnimate: boolean }> = ({ canAnimate }) => {
    const { isAboutHovered, isResumeHovered, isPortfolioHovered } = GetHoverStates();

    const avatarVariants = {
        resting: { scale: 1, rotate: 0, opacity: 1, x: 0, transition: {duration: 0.3} },
        aboutAnimation: { scale: 1, rotate: 0, opacity: 1, x: -350, transition: { duration: 0.3, ease: "easeInOut" } },
        resumeAnimation: { scale: 0.8, rotate: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
        portfolioAnimation: { scale: 1.5, rotate: 0, opacity: 0.3, transition: { duration: 0.3, ease: "easeIn" } },
      };

    if (!canAnimate) {
        for (const key in avatarVariants) {
            avatarVariants[key as keyof typeof avatarVariants] = { scale: 1, rotate: 0, opacity: 1, x: 0, transition: {duration: 0, ease: ""} };
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
            variants={avatarVariants}
        >
            <div className="relative">
                   <Image src="/avatar.png" alt="Avatar" width={384} height={384} priority={true} className="object-cover rounded-full overflow-hidden border-8 border-black" />
            </div>
        </motion.div>
    );
};

export default Avatar;
