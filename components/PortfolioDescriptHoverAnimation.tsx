'use client';

import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { GetHoverStates } from '@/lib/helpers';
import PortfolioItem from './PortfolioItem';
import { useAnimationLock } from '@/contexts/useAnimationLock';

export const PortfolioAnimationLeft: React.FC<{}> = () => {
  const { isPortfolioHovered, getLastHovered } = GetHoverStates();
  const controls = useAnimation();
  const { setVariable, getVariable } = useAnimationLock();

  useEffect(() => {
    if (isPortfolioHovered) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: -1000,
        transition: { duration: 1, delay: 0.5 },
      });
    }
  }, [isPortfolioHovered, controls]);

  if (true) {
    return (
      <AnimatePresence>
        {true && (
          <motion.div
            initial={{ opacity: 0, x: -1000, y: -175 }}
            animate={controls}
            className="absolute"
            style={{ display: 'flex' }}
            onAnimationStart={() => setVariable('PortfolioAnimationState', true)}
            onAnimationComplete={() => setVariable('PortfolioAnimationState', false)}
          >
            <div style={{ padding: '20px' }}>
              <PortfolioItem ProjectIndex={0} width={350} height={300} />
            </div>
            <div style={{ padding: '20px' }}>
              <PortfolioItem ProjectIndex={1} width={500} height={300} />
            </div>
            <div style={{ padding: '20px' }}>
              <PortfolioItem ProjectIndex={3} width={350} height={300} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
}

export const PortfolioAnimationRight: React.FC<{}> = () => {
  const { isPortfolioHovered, getLastHovered } = GetHoverStates();
  const controls = useAnimation();
  const { setVariable, getVariable } = useAnimationLock();

  useEffect(() => {
    if (isPortfolioHovered) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: 1000,
        transition: { duration: 1, delay: 0.5 },
      });
    }
  }, [isPortfolioHovered, controls]);

  if (true) {
    return (
      <AnimatePresence>
        {true && (
          <motion.div
            initial={{ opacity: 0, x: 1000, y: 175 }}
            animate={controls}
            className="absolute"
            style={{ display: 'flex' }}
            onAnimationStart={() => setVariable('PortfolioAnimationState', true)}
            onAnimationComplete={() => setVariable('PortfolioAnimationState', false)}
          >
            <div style={{ padding: '20px' }}>
              <PortfolioItem ProjectIndex={2} width={650} height={300} />
            </div>
            <div style={{ padding: '20px' }}>
              <PortfolioItem ProjectIndex={4} width={260} height={300} />
            </div>
            <div style={{ padding: '20px' }}>
              <PortfolioItem ProjectIndex={5} width={290} height={300} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
}