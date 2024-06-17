import { useHover } from "@/contexts/HoverContext";

/**
 * An object containing the hover states and corresponding toggling and removal
 * functions for each of the four sections of the portfolio (home, about, resume,
 * and portfolio).
 */
interface HoverStateObject {
    isHomeHovered: boolean;
    isAboutHovered: boolean;
    isResumeHovered: boolean;
    isPortfolioHovered: boolean;
    setIsHomeHovered: Function;
    setIsAboutHovered: Function;
    setIsResumeHovered: Function;
    setIsPortfolioHovered: Function;
    onlyHomeTrue: () => void;
    onlyAboutTrue: () => void;
    onlyResumeTrue: () => void;
    onlyPortfolioTrue: () => void;
}

/**
 * This function returns an object containing the hover states and
 * corresponding toggling and removal functions for each of the four
 * sections of the portfolio (home, about, resume, and portfolio).
 *
 * @return {HoverStateObject} An object containing the hover states and corresponding
 * functions for each section.
 */
export const GetHoverStates = (): HoverStateObject => {
    // Get the hover states and corresponding toggling and removal functions
    // for the 'home' section.
    const {
        isHovered: isHomeHovered,
        toggleHovered: setIsHomeHovered,
        removeOtherHovers: onlyHomeTrue,
    } = useHover('home');

    // Get the hover states and corresponding toggling and removal functions
    // for the 'about' section.
    const {
        isHovered: isAboutHovered,
        toggleHovered: setIsAboutHovered,
        removeOtherHovers: onlyAboutTrue,
    } = useHover('about');

    // Get the hover states and corresponding toggling and removal functions
    // for the 'resume' section.
    const {
        isHovered: isResumeHovered,
        toggleHovered: setIsResumeHovered,
        removeOtherHovers: onlyResumeTrue,
    } = useHover('resume');

    // Get the hover states and corresponding toggling and removal functions
    // for the 'portfolio' section.
    const {
        isHovered: isPortfolioHovered,
        toggleHovered: setIsPortfolioHovered,
        removeOtherHovers: onlyPortfolioTrue,
    } = useHover('portfolio');

    // Return an object containing the hover states and corresponding functions
    // for each section.
    return {
        isHomeHovered,
        isAboutHovered,
        isResumeHovered,
        isPortfolioHovered,
        setIsHomeHovered,
        setIsAboutHovered,
        setIsResumeHovered,
        setIsPortfolioHovered,
        onlyHomeTrue,
        onlyAboutTrue,
        onlyResumeTrue,
        onlyPortfolioTrue,
    };
};
