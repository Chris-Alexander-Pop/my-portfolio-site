'use client'

import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

interface HoverContextType {
    hoverStates: { [key: string]: boolean };
    setIsHovered: (id: string, isHovered: boolean) => void;
    removeHovers: (id: string) => void;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export const HoverProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>({});

    const setIsHovered = (id: string, isHovered: boolean) => {
        setHoverStates((prevStates) => ({
            ...prevStates,
            [id]: isHovered,
        }));
    };

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
        <HoverContext.Provider value={{ hoverStates, setIsHovered, removeHovers }}>
            {children}
        </HoverContext.Provider>
    );
};

export const useHover = (id: string) => {
    const context = useContext(HoverContext);
    
    if(context === undefined) {
        throw new Error('useHover hook must be used within a HoverProvider');
    }

    const { hoverStates, setIsHovered, removeHovers } = context;
    const isHovered = hoverStates[id] || false;
    
    const toggleHovered = (isHovered: boolean) => {
        setIsHovered(id, isHovered);
    }

    const removeOtherHovers = () => {
        removeHovers(id);
    }

    return { isHovered, toggleHovered, removeOtherHovers };
};

export default HoverContext;
