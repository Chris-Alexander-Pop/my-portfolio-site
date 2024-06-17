'use client'

import Header from "@/components/Header";
import { HoverProvider } from "@/contexts/HoverContext";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export default function ResumePage() {
    const controls = useAnimation();

    const variants = {
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeInOut" },
        display: "true"
        },
        initial: {
        opacity: 0,
        y: 10,
        display: "none"
        },
    };

    useEffect(() => {
        controls.set("initial");
        controls.start("visible");
    }, [controls]);

    return (
        <HoverProvider>
            <motion.div layout animate={controls} variants={variants}>
                <Header isHome = {false}/>
            </motion.div>
        </HoverProvider>
    );
}