'use client'
import React from "react";
import Header from "@/_components/Header";
import Avatar from "@/_components/Avatar";
import AboutDescriptionHoverAnimation from "@/_components/AboutDescriptionHoverAnimation";
import { HoverProvider } from "@/_contexts/HoverContext";
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

  React.useEffect(() => {
    controls.set("initial");
    controls.start("visible");
  }, [controls]);

  return (
    <HoverProvider>
      <motion.div layout animate={controls} variants={variants}>
        <Header />
        <div className="relative flex items-center justify-center h-screen">
          <div className="absolute flex items-center justify-center">
            <Avatar canAnimate={true} />
            {/* <img src="/avatar.png" alt="Avatar" width={384} height={384} className="object-cover rounded-full overflow-hidden border-8 border-black" /> */}
          </div>
          <div className="absolute ml-88">
            <AboutDescriptionHoverAnimation />
            
            {/* <AboutTechnologies /> <AboutLanguages/> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-96 h-96"></svg> */}
          </div>
        </div>
      </motion.div>
    </HoverProvider>
  );
};

export default HomePage;
