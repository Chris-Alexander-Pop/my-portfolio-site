'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { GetHoverStates } from '@/lib/helpers';
import Image from 'next/image';
import { useAnimationLock } from '@/contexts/useAnimationLock';


/**
 * Renders a tech skills animation based on hover states and interval updates.
 *
 * @return {ReactElement} The rendered tech skills animation component.
 */
const TechSkillsAnimation: React.FC<{distance: string, direction: string, stack: Array<string>}> = ({distance, direction, stack}) => {
    console.log(`absolute w-1 h-[${distance ?? '50'}rem] bg-transparent opacity-0`);
    const { isAboutHovered, isPortfolioHovered, isResumeHovered } = GetHoverStates();
    const { variables, getVariable, setVariable } = useAnimationLock();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentAngleModifier = getVariable('angleModifier') ?? 0;
            setVariable('angleModifier', currentAngleModifier + 0.1);
        }, 10);

        return () => clearInterval(intervalId);
    }, [getVariable, setVariable]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {stack.map((_, index) => {
                const angle = (360 / stack.length) * index + (getVariable('angleModifier') ?? 0) * (direction === 'ccw' ? -1 : 1);
                
                return (
                    <motion.div
                        key={index}
                        initial={{ scaleX: 0 }}
                        animate={isResumeHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.9, delay: index * 0.05 }}
                        className="absolute w-1 bg-transparent opacity-0"
                        style={{ height: `${distance ?? '40'}rem`, rotate: `${angle}deg` }}
                    >
                        {isResumeHovered &&
                            <motion.div 
                                className="relative w-24 h-24"
                                initial={{ scale: 0 }}
                                animate={isResumeHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                transition={{ duration: 0.1, delay: index * 0.15 }}
                            >
                                <Image
                                    src={stack[index]}
                                    alt={`Icon ${index}`}
                                    layout="fill"
                                    objectFit="contain"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    style={{ transform: `rotate(${-angle}deg)` }}
                                />
                            </motion.div>
                        }
                    </motion.div>
                );
            })}
        </div>
    );
};

export default TechSkillsAnimation;
