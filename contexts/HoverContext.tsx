'use client'

import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

/**
 * Represents the context object for managing hover states.
 * Contains the hover states as an object with boolean values,
 * functions to set the hover state for a specific id, a function
 * to remove all hover states except for the one with the specified id,
 * and a function to get the last hovered state.
 */
interface HoverContextType {
    hoverStates: { [key: string]: boolean };
    lastHovered: string | null;
    setIsHovered: (id: string, isHovered: boolean) => void;
    removeHovers: (id: string) => void;
    getLastHovered: () => string | null;
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
    const [lastHovered, setLastHovered] = useState<string | null>(null);

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
        if (isHovered && lastHovered !== id) {
            setLastHovered(id);
        }
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

    /**
     * Function to get the last hovered state.
     *
     * @returns {string | null} The id of the last hovered section or null if none.
     */
    const getLastHovered = () => lastHovered;

    return (
        // Provide the hover states and their update functions to the children components.
        <HoverContext.Provider value={{ hoverStates, lastHovered, setIsHovered, removeHovers, getLastHovered }}>
            {children}
        </HoverContext.Provider>
    );
};

/**
 * Custom hook to manage hover state for a specific section.
 *
 * @param {string} id - The id of the section to manage hover state for.
 * @returns {Object} An object containing the hover state, a function to toggle the hover state, a function to remove all hover states except for the one with the specified id, and a function to get the last hovered state.
 */
export const useHover = (id: string) => {
    // Retrieve the HoverContext from the context provider.
    const context = useContext(HoverContext);
    
    // Throw an error if the hook is not used within a HoverProvider.
    if (context === undefined) {
        throw new Error('useHover hook must be used within a HoverProvider');
    }

    // Destructure the values from the HoverContext.
    const { hoverStates, setIsHovered, removeHovers, getLastHovered } = context;
    
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
    return { isHovered, toggleHovered, removeOtherHovers, getLastHovered };
};

export default HoverContext;
