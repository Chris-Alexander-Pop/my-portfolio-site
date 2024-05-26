'use client'
import React from "react";
import Header from "@/components/Header";
import Avatar from "@/components/Avatar";
import AboutDescriptionHoverAnimation from "@/components/AboutDescriptionHoverAnimation";
import { TechnologyDropdown } from "@/components/AboutTechStack";
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
            {/* <TechnologyDropdown />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-96 h-96"></svg> */}
          </div>
        </div>
      </motion.div>





      {/* <button
        type="button"
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
        Button
      </button> */}
    </HoverProvider>
  );
};

export default HomePage;