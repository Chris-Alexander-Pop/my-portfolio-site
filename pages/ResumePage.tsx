'use client'

import Header from "@/components/Header";
import { HoverProvider } from "@/contexts/HoverContext";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

/**
 * ResumePage component is the page that displays the developer's resume.
 * It uses the Framer Motion library for animations.
 * It also uses the HoverProvider context to provide the hover state to its child components.
 *
 * @returns {JSX.Element} The ResumePage component.
 */
export default function ResumePage() {
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

    /**
     * useEffect hook to set initial animation state and start the animation when controls change.
     * It sets the initial animation state and starts the animation when the controls change.
     *
     * @param {Object} controls - The animation controls object.
     * @return {void}
     */
    useEffect(() => {
        controls.set("initial");
        controls.start("visible");
    }, [controls]);

    // Return the ResumePage component
    return (
        // Provide the hover state to child components
        <HoverProvider>
            {/* Animate the page using the Framer Motion library */}
            <motion.div layout animate={controls} variants={variants}>
                {/* Render the Header component with the isHome prop set to false */}
                <Header isHome = {false}/>
            </motion.div>
        </HoverProvider>
    );
}
