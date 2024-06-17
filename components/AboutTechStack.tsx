import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { easeInOut, motion, useAnimation } from "framer-motion";

/**
 * Component that renders a list of programming languages with their icons.
 * @returns JSX.Element
 */
export const AboutLanguages: React.FC<{}> = () => {
    // Icon size and margin size variables
    const iconSize = 48;
    const marginSize = 8;

    // Return the JSX element
    return (
        <div className="flex">
            {/* TypeScript icon */}
            <Image
                src="/Icons/TypeScript.svg"
                alt="TypeScript"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* Kotlin icon */}
            <Image
                src="/Icons/Kotlin.svg"
                alt="Kotlin"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* Python icon */}
            <Image
                src="/Icons/Python.svg"
                alt="Python"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* C++ icon */}
            <Image
                src="/Icons/CPlusPlus.svg"
                alt="C++"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: 0, marginTop: marginSize }}
            />
        </div>
    );
};

/**
 * Component that renders a list of front-end frameworks with their icons.
 * @returns JSX.Element
 */
export const AboutFrameworks: React.FC<{}> = () => {
    // Icon size and margin size variables
    const iconSize = 48;
    const marginSize = 8;

    // Return the JSX element
    return (
        <div className="flex">
            {/* React icon */}
            <Image
                src="/Icons/React.svg"
                alt="React"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* NEXT.js icon */}
            <Image
                src="/Icons/Next.js.svg"
                alt="NEXT.js"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* SvelteKit icon */}
            <Image
                src="/Icons/Svelte.svg"
                alt="SvelteKit"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* TailwindCSS icon */}
            <Image
                src="/Icons/TailwindCSS.svg"
                alt="TailwindCSS"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: 0, marginTop: marginSize }}
            />
        </div>
    );
};

/**
 * Component that renders a list of backend frameworks with their icons.
 * @returns JSX.Element
 */
export const AboutBackend: React.FC<{}> = () => {
    // Icon size and margin size variables
    const iconSize = 48;
    const marginSize = 8;

    // Return the JSX element
    return (
        <div className="flex">
            {/* Node.js icon */}
            <Image
                src="/Icons/Node.js.svg"
                alt="Node.js"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* Keystone.js icon */}
            <Image
                src="/Icons/Keystone.svg"
                alt="Keystone.js"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* Ktor icon */}
            <Image
                src="/Icons/Ktor.svg"
                alt="Ktor"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: 0, marginTop: marginSize }}
            />
        </div>
    );
};

/**
 * Component that renders a list of databases with their icons.
 * @returns JSX.Element
 */
export const AboutDatabases: React.FC<{}> = () => {
    // Icon size and margin size variables
    const iconSize = 48;
    const marginSize = 8;

    // Return the JSX element
    return (
        // Container for the icons
        <div className="flex">
            {/* MongoDB icon */}
            <Image
                src="/Icons/MongoDB.svg" // Icon source
                alt="MongoDB" // Alternative text for accessibility
                width={iconSize} // Icon width
                height={iconSize} // Icon height
                style={{ marginRight: marginSize, marginTop: marginSize }} // Icon style
            />

            {/* Supabase icon */}
            <Image
                src="/Icons/Supabase.svg"
                alt="Supabase"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* PostgreSQL icon */}
            <Image
                src="/Icons/PostgresSQL.svg"
                alt="PostgresSQL"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* AWS Quantum Ledger Data Base icon */}
            <Image
                src="/Icons/QLDB.svg"
                alt="AWS Quantum Ledger Data Base"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: 0, marginTop: marginSize }}
            />
        </div>
    );
};

/**
 * Component that renders a list of servers with their icons.
 * @returns JSX.Element
 */
export const AboutServers: React.FC<{}> = () => {
    // Icon size and margin size variables
    const iconSize = 48;
    const marginSize = 8;

    // Return the JSX element
    return (
        <div className="flex">
            {/* AWS icon */}
            <Image
                src="/Icons/AWS.svg" // Icon source
                alt="AWS" // Alternative text for accessibility
                width={iconSize} // Icon width
                height={iconSize} // Icon height
                style={{ marginRight: marginSize, marginTop: marginSize }} // Icon style
            />

            {/* AWS Amplify icon */}
            <Image
                src="/Icons/Amplify.svg"
                alt="AWS Amplify"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* AWS S3 Bucket icon */}
            <Image
                src="/Icons/S3Bucket.svg"
                alt="AWS S3 Bucket"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* Heroku icon */}
            <Image
                src="/Icons/Heroku.svg"
                alt="Heroku"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* Vercel icon */}
            <Image
                src="/Icons/Vercel.svg"
                alt="Vercel"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: 0, marginTop: marginSize }}
            />
        </div>
    );
};

/**
 * Component that renders a list of tools with their icons.
 * @returns JSX.Element
 */
export const AboutTools: React.FC<{}> = () => {
    // Icon size and margin size variables
    const iconSize = 48;
    const marginSize = 8;

    // Return the JSX element
    return (
        // Container for the icons
        <div className="flex">
            {/* VSCode icon */}
            <Image
                src="/Icons/VSCode.svg" // Icon source
                alt="VSCode" // Alternative text for accessibility
                width={iconSize} // Icon width
                height={iconSize} // Icon height
                style={{ marginRight: marginSize, marginTop: marginSize }} // Icon style
            />

            {/* Android Studio icon */}
            <Image
                src="/Icons/AndroidStudio.svg"
                alt="Android Studio"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: marginSize, marginTop: marginSize }}
            />

            {/* GitHub icon */}
            <Image
                src="/Icons/GitHub.svg"
                alt="GitHub"
                width={iconSize}
                height={iconSize}
                style={{ marginRight: 0, marginTop: marginSize }}
            />
        </div>
    );
};

/**
 * ScrollWheel component
 * This component renders a scrollable wheel displaying different technologies
 * using Framer Motion for animations.
 */
export const ScrollWheel = () => {
  // Animation controls for the scrollable wheel
  const controls = useAnimation();
  // Reference to the scrollable wheel container element
  const scrollRef = useRef<HTMLDivElement>(null);

  // Array of different technologies and their corresponding content components
  const technologies = [
    { name: "Languages", content: <AboutLanguages /> },
    { name: "Frameworks", content: <AboutFrameworks /> },
    { name: "Backend", content: <AboutBackend /> },
    { name: "Databases", content: <AboutDatabases /> },
    { name: "Servers", content: <AboutServers /> },
    { name: "Tools", content: <AboutTools /> },
  ];

  // Effect hook to start the scroll animation on mount
  useEffect(() => {
    startScroll();
  });

  /**
   * Function to start the scroll animation
   * It calculates the scroll width and container width to determine the animation properties.
   */
  const startScroll = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollWidth = scrollElement.scrollWidth;
      const containerWidth = scrollElement.offsetWidth;
      controls.start({
        x: [20, -scrollWidth + containerWidth - 20], // Animation properties for the scroll position
        transition: {
          x: {
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: 'loop', // Repeat the animation in a loop
            duration: 30, // Duration of each animation cycle
            ease: 'linear', // Easing function for the animation
          },
        },
      });
    }
  };

  // JSX element for the scrollable wheel
  return (
    <div className="overflow-hidden py-10 w-96"> {/* Container for the scrollable wheel */}
      {/* Animate the scrollable wheel */}
      <motion.div
        className="flex"
        ref={scrollRef}
        animate={controls} 
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex-none bg-gray-200 p-4 m-1 flex justify-center items-center text-2xl rounded-lg shadow-md"
          >
            {tech.content} {/* Render the content component for each technology */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
