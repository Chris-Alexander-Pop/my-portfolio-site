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
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
        },
        initial: {
            opacity: 0,
            y: 10,
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
        <HoverProvider>
            <motion.div layout animate={controls} variants={variants} className="flex flex-col h-screen">
                <Header isHome={false} />
                <div className="flex-1 overflow-hidden">
                    <iframe
                        src="/Chris_Pop_Resume.pdf"
                        className="w-full h-full border-none"
                    />
                </div>
            </motion.div>
        </HoverProvider>
    );
}
