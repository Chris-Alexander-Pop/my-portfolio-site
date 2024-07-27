'use client'

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Avatar from "@/components/Avatar";
import AboutDescriptionHoverAnimation from "@/components/AboutDescriptionHoverAnimation";
import TechSkillsAnimation from "@/components/ResumeDescriptionHoverAnimation";
import { PortfolioAnimationLeft, PortfolioAnimationRight } from "@/components/PortfolioDescriptHoverAnimation";
import { HoverProvider } from "@/contexts/HoverContext";
import { motion, useAnimation } from "framer-motion";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { AnimationLockProvider } from "@/contexts/useAnimationLock";
import { getPrimaryStack, getSecondaryStack } from "@/lib/helpers";

/**
 * HomePage component is the main page of the website.
 * It uses the Framer Motion library for animations.
 * It also uses the HoverProvider context to provide the hover state to its child components.
 * 
 * @returns {JSX.Element} The HomePage component.
 */
const HomePage: React.FC = () => {
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

  return (
    <div className="relative h-screen">
      <BackgroundAnimation />
      <HoverProvider>
        <AnimationLockProvider>
          {/* Animate the page using the Framer Motion library */}
          <motion.div layout animate={controls} variants={variants}>
            {/* Render the Header component with the isHome prop set to true */}
            <div className="sticky top-0 z-50">
              <Header isHome = {true}/>
            </div>
            {/* Render the main content of the page */}
            <div className="relative flex items-center justify-center h-90vh overflow-hidden">
              <div className="absolute flex items-center justify-center z-40">
                {/* Render the Avatar component with the canAnimate prop set to true */}
                <Avatar canAnimate={true} />
              </div>

              <div className="absolute flex items-center justify-center z-10">
                
                <TechSkillsAnimation distance={"40"} direction={"cw"} stack={getPrimaryStack()} speed={1}/>
                <TechSkillsAnimation distance={"60"} direction={"ccw"} stack={
                  [
                    "./Icons/Amplify.svg",
                    "./Icons/AndroidStudio.svg",
                    "./Icons/AWS.svg",
                    "./Icons/GitHub.svg",
                    "./Icons/Heroku.svg",
                    "./Icons/Keystone.svg",
                    "./Icons/Ktor.svg",
                    "./Icons/Kubernetes.svg",
                    "./Icons/MongoDB.svg",
                    "./Icons/PostgresSQL.svg",
                    "./Icons/QLDB.svg",
                    "./Icons/S3Bucket.svg",
                    "./Icons/Supabase.svg",
                    "./Icons/TailwindCSS.svg",
                    "./Icons/Vercel.svg",
                    "./Icons/VSCode.svg"
                  ]} speed={3}/>
                <TechSkillsAnimation distance={"80"} direction={"cw"} stack={
                  [ 
                    "./Icons/Airtable.svg",
                    "./Icons/APIGateway.svg",
                    "./Icons/AppSync.svg",
                    "./Icons/Arduino.svg",
                    "./Icons/AutoCAD.svg",
                    "./Icons/CloudFront.svg",
                    "./Icons/CloudWatch.svg",
                    "./Icons/Cognito.svg",
                    "./Icons/DynamoDB.svg",
                    "./Icons/Express.js.svg",
                    "./Icons/FramerMotion.svg",
                    "./Icons/GraphQL.svg",
                    "./Icons/JetpackCompose.svg",
                    "./Icons/Lambda.svg",
                    "./Icons/OpenAI.svg",
                    "./Icons/OpenCV.svg",
                    "./Icons/S3Bucket.svg",
                    "./Icons/STM32.svg",
                    "./Icons/Stripe.svg",
                  ]} speed={9}/>
              </div>
              
              <div className="absolute ml-88 z-40">
                {/* Render the AboutDescriptionHoverAnimation component */}
                <AboutDescriptionHoverAnimation />
              </div>
              {/* Render the PortfolioAnimationLeft and PortfolioAnimationRight components */}
              <PortfolioAnimationLeft />
              <PortfolioAnimationRight />
            </div>
          </motion.div>
        </AnimationLockProvider>
      </HoverProvider>
    </div>
  );
};

export default HomePage;
