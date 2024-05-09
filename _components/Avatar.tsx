'use client'
import { motion } from 'framer-motion';
import { useHover } from '../_contexts/HoverContext';


const Avatar = () => {

    const { isHovered: isAnimatingAbout, toggleHovered: setIsAboutHovered } = useHover('about');
    const { isHovered: isAnimatingResume, toggleHovered: setIsResumeHovered } = useHover('resume');
    const { isHovered: isAnimatingPortfolio, toggleHovered: setIsPortfolioHovered } = useHover('portfolio');

    const variants = {
        resting: { scale: 1, rotate: 0, opacity: 1 },
        aboutAnimation: { scale: 1.2, rotate: 45, opacity: 0.5 },
        resumeAnimation: { scale: 0.8, rotate: -45, opacity: 0.7 },
        portfolioAnimation: { scale: 1.5, rotate: 90, opacity: 0.3 },
    };

    return (
        <motion.div
        className="relative inline-block"
        initial="resting"
        animate={
            isAnimatingAbout
            ? 'aboutAnimation'
            : isAnimatingResume
            ? 'resumeAnimation'
            : isAnimatingPortfolio
            ? 'portfolioAnimation'
            : 'resting'
        }
        variants={variants}
        >
        <div className="w-50 h-50 flex items-center justify-center rounded-full">
            <div className="border-5 border-black rounded-full overflow-hidden">
            <img
                src="/avatar.png"
                alt="Avatar"
                className="w-full h-full object-cover rounded-full"
                style={{ margin: '-5px' }}
            />
            </div>
        </div>
        </motion.div>
    );
    };

    export default Avatar;
