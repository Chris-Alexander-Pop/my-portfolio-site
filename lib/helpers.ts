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
    getLastHovered: () => string | null;
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

    const {getLastHovered: getLastHovered} = useHover('');

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
        getLastHovered
    };
};

/**
 * Returns an array of file paths for primary stack icons.
 *
 * @return {string[]} An array of file paths for primary stack icons.
 */
export const getPrimaryStack = () => {
    return ["./Icons/TypeScript.svg", "./Icons/Kotlin.svg", "./Icons/CPlusPlus.svg", "./Icons/Python.svg", "./Icons/React.svg", "./Icons/Next.js.svg", "./Icons/Node.js.svg", "./Icons/Svelte.svg"];
}

/**
 * Returns an array of file paths for secondary stack icons.
 *
 * @param {boolean} [alt=false] - If true, returns an alternate set of icons.
 * @return {string[]} An array of file paths for secondary stack icons.
 */
export const getSecondaryStack = (alt: boolean) => {
    if(alt){
        return [
            "./Icons/Keystone.svg",
            "./Icons/Ktor.svg",
            "./Icons/Kubernetes.svg",
            "./Icons/MongoDB.svg",
            "./Icons/PostgresSQL.svg",
            "./Icons/QLDB.svg",
            "./Icons/S3Bucket.svg",
            "./Icons/Supabase.svg",
            "./Icons/TailwindCSS.svg",
            "./Icons/Vercel.svg",
            "./Icons/VSCode.svg",
            "./Icons/Amplify.svg",
            "./Icons/AndroidStudio.svg",
            "./Icons/AWS.svg",
            "./Icons/GitHub.svg",
            "./Icons/Heroku.svg"
        ]
    } else {
        return [
            "./Icons/Amplify.svg",
            "./Icons/AndroidStudio.svg",
            "./Icons/AWS.svg",
            "./Icons/GitHub.svg",
            "./Icons/Heroku.svg",
            "./Icons/Keystone.svg",
            "./Icons/Ktor.svg",
            "./Icons/Kubernetes.svg",
            "./Icons/MongoDB.svg",
            "./Icons/PostgresSQL.svg",
            "./Icons/QLDB.svg",
            "./Icons/S3Bucket.svg",
            "./Icons/Supabase.svg",
            "./Icons/TailwindCSS.svg",
            "./Icons/Vercel.svg",
            "./Icons/VSCode.svg"
        ]
    }
}


