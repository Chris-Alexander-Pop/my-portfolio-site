'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { GetHoverStates } from '@/lib/helpers.js';
import Image from 'next/image';

const LineAnimation: React.FC<{}> = () => {
    const { isAboutHovered, isPortfolioHovered, isResumeHovered } = GetHoverStates();
    const controls = useAnimation();
    const aboutResumeAnimation = useAnimation();

    const lines = Array.from({ length: 6 });
    const icons = [
        '/getupgraded-logo.png',
        '/Icons/React.svg',
        '/Icons/React.svg',
        '/Icons/React.svg',
        '/Icons/React.svg',
        '/Icons/React.svg',
        '/Icons/React.svg',
        '/Icons/React.svg',
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {lines.map((_, index) => {
                const angle = (360 / lines.length) * index;
                return (
                    <motion.div
                        key={index}
                        initial={{ scaleX: 0 }}
                        animate={isResumeHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.9, delay: index * 0.05 }}
                        className="absolute w-1 h-120 bg-black"
                        style={{ rotate: `${angle}deg` }}
                    >
                        {isResumeHovered &&
                            <motion.div 
                            className="relative w-24 h-24"
                            initial={{ scale: 0 }}
                            animate={isResumeHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: -2 }}
                            transition={{ duration: 0.1, delay: index * 0.15 }}
                            >
                                <Image
                                    src={icons[index]}
                                    alt={`Icon ${index}`}
                                    layout="fill"
                                    objectFit="contain"
                                    className="absolute top-0 left-0 transform translate-y-[-100%] translate-x-[-50%]"
                                />
                            </motion.div>
                        }
                    </motion.div>
                );
            })}
        </div>
    );
};

export default LineAnimation;
