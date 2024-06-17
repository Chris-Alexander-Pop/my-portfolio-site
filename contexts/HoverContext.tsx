'use client'

import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

/**
 * Represents the context object for managing hover states.
 * Contains the hover states as an object with boolean values,
 * functions to set the hover state for a specific id, and a function
 * to remove all hover states except for the one with the specified id.
 */
interface HoverContextType {
    hoverStates: { [key: string]: boolean };
    setIsHovered: (id: string, isHovered: boolean) => void;
    removeHovers: (id: string) => void;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

/**
 * A context provider for managing hover states.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children components.
 * @returns {ReactNode} The rendered provider component.
 */
export const HoverProvider: FC<{ children: ReactNode }> = ({ children }) => {
    // State to hold the hover states for each section.
    const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>({});

    /**
     * Function to set the hover state for a specific section.
     *
     * @param {string} id - The id of the section to update.
     * @param {boolean} isHovered - The new hover state.
     */
    const setIsHovered = (id: string, isHovered: boolean) => {
        setHoverStates((prevStates) => ({
            ...prevStates,
            [id]: isHovered,
        }));
    };

    /**
     * Function to remove all hover states except for the one with the specified id.
     *
     * @param {string} id - The id of the section to keep as hovered.
     */
    const removeHovers = (id: string) => {
        setHoverStates((prevStates) => ({
            ...prevStates,
            [id]: true,
            ...Object.fromEntries(
                Object.entries(prevStates).filter(([key]) => key !== id).map(([key]) => [key, false])
            ),
        }));
    };

    return (
        // Provide the hover states and their update functions to the children components.
        <HoverContext.Provider value={{ hoverStates, setIsHovered, removeHovers }}>
            {children}
        </HoverContext.Provider>
    );
};

/**
 * Custom hook to manage hover state for a specific section.
 *
 * @param {string} id - The id of the section to manage hover state for.
 * @returns {Object} An object containing the hover state, a function to toggle the hover state, and a function to remove all hover states except for the one with the specified id.
 */
export const useHover = (id: string) => {
    // Retrieve the HoverContext from the context provider.
    const context = useContext(HoverContext);
    
    // Throw an error if the hook is not used within a HoverProvider.
    if(context === undefined) {
        throw new Error('useHover hook must be used within a HoverProvider');
    }

    // Destructure the values from the HoverContext.
    const { hoverStates, setIsHovered, removeHovers } = context;
    
    // Get the hover state for the specified id.
    const isHovered = hoverStates[id] || false;
    
    /**
     * Toggle the hover state for the specified id.
     *
     * @param {boolean} isHovered - The new hover state.
     */
    const toggleHovered = (isHovered: boolean) => {
        setIsHovered(id, isHovered);
    }

    /**
     * Remove all hover states except for the one with the specified id.
     */
    const removeOtherHovers = () => {
        removeHovers(id);
    }

    // Return the hover state and the functions to toggle and remove hover states.
    return { isHovered, toggleHovered, removeOtherHovers };
};

export default HoverContext;
