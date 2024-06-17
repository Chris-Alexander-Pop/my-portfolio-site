'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { GetHoverStates } from '@/lib/helpers.js';

const PortfolioAnimation: React.FC<{}> = () => {
    const { isAboutHovered, isPortfolioHovered, isResumeHovered } = GetHoverStates();
    const controls = useAnimation();
    const aboutPortfolioAnimation = useAnimation();

    useEffect(() => {
        if (isPortfolioHovered) {
            aboutPortfolioAnimation.start({
                opacity: 1,
                scale: 1,
                transition: { delay: 0.3 },
                x: 60
            });
        }
    }, [isPortfolioHovered, aboutPortfolioAnimation]);
    return (
        <div className="relative flex justify-center">
            {isPortfolioHovered &&
                <div>

                </div>
            }
        </div>
    );
};

export default PortfolioAnimation;