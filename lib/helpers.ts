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

export interface BlogData {
    name: string;
    title: string;
    date: string;
    type: string;
    paragraphs: string[];
    stack?: string[];
}

// Define the type for your blog data collection
export type BlogDataCollection = Record<string, BlogData>;

export const Blogs = (slug: string, all = false): BlogData | BlogDataCollection => {
    const data: BlogDataCollection = {
        "Upgraded": {
            name: "Upgraded",
            title: "My Experience at Upgraded",
            date: "May 2024 - Present",
            paragraphs: ["/avatar.png", "content"],
            type: "technical",
            stack: ['/Icons/Next.js.svg',  '/Icons/React.svg',  '/Icons/JavaScript.svg',  '/Icons/TypeScript.svg',  '/Icons/Node.js.svg',  '/Icons/TailwindCSS.svg',  '/Icons/Selenium.svg',  '/Icons/Airtable.svg',  '/Icons/OpenAI.svg',  '/Icons/Stripe.svg',  '/Icons/Vercel.svg',  '/Icons/GitHub.svg']
        },
        "Vahana": {
            name: "Vahana",
            title: "My Development Journey in Vahana",
            date: "May 2024 - August 2024",
            paragraphs: ["content"],
            type: "technical",
            stack: ['/Icons/Next.js.svg', '/Icons/React.svg', '/Icons/TypeScript.svg', '/Icons/Kotlin.svg', '/Icons/Swift.svg', '/Icons/JetpackCompose.svg', '/Icons/AWS.svg', '/Icons/Amplify.svg', '/Icons/Stripe.svg', '/Icons/GitHub.svg']
        },
        "PortfolioWebsite": {
            name: "Digital Portfolio",
            title: "Developing my Digital Portfolio",
            date: "April 2024 - July 2024",
            paragraphs: ["content"],
            type: "technical",
            stack: ['/Icons/Next.js.svg', '/Icons/React.svg', '/Icons/TypeScript.svg', '/Icons/TailwindCSS.svg', '/Icons/FramerMotion.svg', '/Icons/Vercel.svg', '/Icons/GitHub.svg']
        },
        "PosturePal": {
            name: "Posture Pal",
            title: "ECE 198 Course Project: Posture Pal",
            date: "September 2023 - December 2023",
            paragraphs: ["content"],
            type: "technical",
            stack: ['/Icons/CPlusPlus.svg', '/Icons/STM32.svg', '/Icons/AutoCAD.svg', '/Icons/GitHub.svg']
        },
        "KnightsoftheCitadel": {
            name: "Knight of the Citadel",
            title: "ICS4U0 Course Project: Posture Pal",
            date: "February 2023 - June 2023",
            paragraphs: ["content"],
            type: "technical",
            stack: ['/Icons/Python.svg', '/Icons/GitHub.svg', '/Icons/VSCode.svg']
        },
        "BluetoothSmartCart": {
            name: "Bluetooth Smart Cart",
            title: "Engineering a Bluetooth Smart Cart",
            date: "February 2022 - June 2022",
            paragraphs: ["content"],
            type: "technical",
            stack: ['/Icons/CPlusPlus.svg', '/Icons/Arduino.svg', '/Icons/Python.svg']
        },
    };

    // Return the data for the provided slug if specified, or a default message if the slug is not found
    return (all ? data : (data[slug] || { name: "Not Found", title: "Not Found", date: "", paragraphs: ["No content available"], type: "" }));
};