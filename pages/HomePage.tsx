'use client'

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Avatar from "@/components/Avatar";
import AboutDescriptionHoverAnimation from "@/components/AboutDescriptionHoverAnimation";
import LineAnimation from "@/components/ResumeDescriptionHoverAnimation";
import { PortfolioAnimationLeft, PortfolioAnimationRight } from "@/components/PortfolioDescriptHoverAnimation";
import { HoverProvider } from "@/contexts/HoverContext";
import { motion, useAnimation } from "framer-motion";

const HomePage: React.FC = () => {
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
        <div className="sticky top-0 z-50">
          <Header isHome = {true}/>
        </div>
        <div className="relative flex items-center justify-center h-90vh overflow-hidden bottom-12">
          <div className="absolute flex items-center justify-center">
            <Avatar canAnimate={true} />
          </div>
          <div className="-z-50">
            <LineAnimation />
          </div>
          <div className="absolute ml-88">
            <AboutDescriptionHoverAnimation />
          </div>
          <PortfolioAnimationLeft />
          <PortfolioAnimationRight />
        </div>
      </motion.div>
    </HoverProvider>
  );
};

export default HomePage;
