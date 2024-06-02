'use client'
import React from "react";
import Header from "@/components/Header";
import Avatar from "@/components/Avatar";
import AboutDescriptionHoverAnimation from "@/components/AboutDescriptionHoverAnimation";
import LineAnimation from "@/components/ResumeDescriptionHoverAnimation";
import { HoverProvider } from "@/contexts/HoverContext";
import { motion, useAnimation } from "framer-motion";
import { ScrollWheel } from "@/components/AboutTechStack";

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

  React.useEffect(() => {
    controls.set("initial");
    controls.start("visible");
  }, [controls]);

  return (
    <HoverProvider>
      <motion.div layout animate={controls} variants={variants}>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
        <div className="relative flex items-center justify-center h-screen bottom-6">
          <div className="absolute flex items-center justify-center">
            <Avatar canAnimate={true} />
            {/* <img src="/avatar.png" alt="Avatar" width={384} height={384} className="object-cover rounded-full overflow-hidden border-8 border-black" /> */}
          </div>
          <div className="-z-50">
            <LineAnimation />
          </div>
          <div className="absolute ml-88">
            <AboutDescriptionHoverAnimation />
            {/* <TechnologyDropdown />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-96 h-96"></svg> */}
          </div>
        </div>
        {/* <ScrollWheel /> */}
      </motion.div>
    </HoverProvider>
  );
};

export default HomePage;
