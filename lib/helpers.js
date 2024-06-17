import { useHover } from "@/contexts/HoverContext";

export const GetHoverStates = () => {
    const { isHovered: isHomeHovered, toggleHovered: setIsHomeHovered, removeOtherHovers: onlyHomeTrue } = useHover('home');
    const { isHovered: isAboutHovered, toggleHovered: setIsAboutHovered, removeOtherHovers: onlyAboutTrue } = useHover('about');
    const { isHovered: isResumeHovered, toggleHovered: setIsResumeHovered, removeOtherHovers: onlyResumeTrue } = useHover('resume');
    const { isHovered: isPortfolioHovered, toggleHovered: setIsPortfolioHovered, removeOtherHovers: onlyPortfolioTrue } = useHover('portfolio');
  
    return { isHomeHovered, isAboutHovered, isResumeHovered, isPortfolioHovered, setIsHomeHovered, setIsAboutHovered, setIsResumeHovered, setIsPortfolioHovered, onlyHomeTrue, onlyAboutTrue, onlyResumeTrue, onlyPortfolioTrue };
};