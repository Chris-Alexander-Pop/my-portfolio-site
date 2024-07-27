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
const TechSkillsAnimation: React.FC<{distance: string, direction: string, stack: Array<string>, speed: number}> = ({distance, direction, stack, speed = 1}) => {
    const { isAboutHovered, isPortfolioHovered, isResumeHovered, getLastHovered } = GetHoverStates();
    const { variables, getVariable, setVariable } = useAnimationLock();

    const controls = useAnimation();

    useEffect(() => {
        if (isResumeHovered && !(getVariable('PortfolioAnimationState') && getLastHovered() === 'portfolio')) {
            controls.start({
                scaleX: 1,
                opacity: 1,
                transition: { duration: 0.5 },
            });
        } else {
            controls.start({
                scaleX: 0,
                opacity: 0,
                transition: { duration: 0.5 },
            });
        }

        const intervalId = setInterval(() => {
            const currentAngleModifier = getVariable('angleModifier') ?? 0;
            setVariable('angleModifier', currentAngleModifier + 0.01 * speed);
        }, 30);

        return () => clearInterval(intervalId);
    }, [controls, getLastHovered, getVariable, isResumeHovered, setVariable, speed]);

    if (true) { //isResumeHovered || (!isResumeHovered && getVariable('ResumeAnimationState') && getLastHovered() === 'resume')
        return (
            <div className="relative w-full h-full flex items-center justify-center">
                {stack.map((_, index) => {
                    const angle = (360 / stack.length) * index + (getVariable('angleModifier') ?? 0) * (direction === 'ccw' ? -1 : 1);
                    
                    return (
                        <motion.div
                            key={index}
                            initial={{ scaleX: 0 }}
                            animate={controls}
                            transition={{ duration: 0.9, delay: index * 0.05 }}
                            className="absolute w-1 bg-transparent opacity-0"
                            style={{ height: `${distance ?? '40'}rem`, rotate: `${angle}deg` }}
                            // onAnimationStart={() => setVariable('ResumeAnimationState', true)}
                            // onAnimationComplete={() => setVariable('ResumeAnimationState', false)}
                        >
                            {
                                <motion.div 
                                    className="relative w-16 h-16"
                                    initial={{ scale: 0 }}
                                    animate={isResumeHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.1, delay: index * 0.15 }}
                                    // onAnimationStart={() => setVariable('ResumeAnimationState', true)}
                                    // onAnimationComplete={() => setVariable('ResumeAnimationState', false)}
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
}
export default TechSkillsAnimation;
