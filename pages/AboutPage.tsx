'use client'

import Header from "@/components/Header";
import { HoverProvider } from "@/contexts/HoverContext";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

/**
 * AboutPage component is the page that displays information about the developer.
 * It uses the HoverProvider context to provide the hover state to its child components.
 * The page is animated using the Framer Motion library.
 *
 * @returns {JSX.Element} The AboutPage component.
 */
export default function AboutPage() {
    // Initialize animation controls
    const controls = useAnimation();

    // Define animation variants
    const variants = {
        // Variant for when the page is visible
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
            display: "true"
        },
        // Variant for when the page is initially hidden
        initial: {
            opacity: 0,
            y: 10,
            display: "none"
        },
    };

    // Set initial animation state and start the animation when controls change
    useEffect(() => {
        controls.set("initial");
        controls.start("visible");
    }, [controls]);

    // Return the AboutPage component
    return (
        <HoverProvider>
            {/* Animate the page using the Framer Motion library */}
            <motion.div layout animate={controls} variants={variants}>
                {/* Render the Header component with the isHome prop set to false */}
                <Header isHome = {false}/>
            </motion.div>
        </HoverProvider>
    );
}
