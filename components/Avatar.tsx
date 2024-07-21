'use client'
import { motion } from 'framer-motion';
import { GetHoverStates } from '@/lib/helpers';
import Image from 'next/image';
import React from 'react';
import { useAnimationLock } from '@/contexts/useAnimationLock';

/**
 * Renders an animated avatar component that can be animated based on hover states.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.canAnimate - Determines if the avatar should animate.
 * @return {JSX.Element} The animated avatar component.
 */
const Avatar: React.FC<{ canAnimate: boolean }> = ({ canAnimate }) => {
  const { isAboutHovered, isResumeHovered, isPortfolioHovered, getLastHovered } = GetHoverStates();
  const { variables, getVariable, setVariable } = useAnimationLock();

  const avatarVariants = {
    resting: { scale: 1, rotate: 0, opacity: 1, x: 0, y: 0, transition: { duration: 1, x: { bounce: 0 }, bounce: 0 } },
    aboutAnimation: { scale: 1, rotate: 0, opacity: 1, x: -350, transition: { duration: 0.3, x: { bounce: 0 }, bounce: 0 } },
    resumeAnimation: { scale: 0.8, rotate: 0, opacity: 1, transition: { duration: 0.3, x: { bounce: 0 }, bounce: 0 } },
    portfolioAnimation: { scale: 1, rotate: 0, opacity: 0, y: 1500, transition: { duration: 2, x: { bounce: 0 }, bounce: 0 } },
  };

   
  return (
    <motion.div
      className="flex items-center justify-center"
      initial="resting"
      animate={
        canAnimate
          ? isAboutHovered
            ? 'aboutAnimation'
            : (isResumeHovered || (!isResumeHovered && getVariable('ResumeAnimationState') && !isAboutHovered && !isPortfolioHovered && getLastHovered() === 'resume'))
              ? 'resumeAnimation'
              : (isPortfolioHovered || (!isPortfolioHovered && getVariable('PortfolioAnimationState') && !isAboutHovered && !isResumeHovered && getLastHovered() === 'portfolio'))
                ? 'portfolioAnimation'
                : 'resting'
          : 'resting'
      }
      variants={avatarVariants}
      onAnimationStart={() => {setVariable('AvatarAnimationState', true)}}
      onAnimationComplete={() => {setVariable('AvatarAnimationState', false)}}
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
