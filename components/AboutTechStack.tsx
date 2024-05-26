import React, { useState } from "react";
import Image from "next/image";
import { easeInOut, motion, useAnimation } from "framer-motion";

export const AboutLanguages: React.FC<{}> = () => {
    const iconSize = 48;
    const marginSize = 8;
    return(
        <div className="flex">
            <Image src="/Icons/TypeScript.svg" alt="TypeScript" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/Kotlin.svg" alt="Kotlin" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/Python.svg" alt="Python" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/CPlusPlus.svg" alt="C++" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
        </div>
    );
};

export const AboutFrameworks: React.FC<{}> = () => {
    const iconSize = 48;
    const marginSize = 8;
    return(
        <div className="flex">
            <Image src="/Icons/React.svg" alt="React" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }}/>
            <Image src="/Icons/Next.js.svg" alt="NEXT.js" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }}/>
            <Image src="/Icons/Svelte.svg" alt="SvelteKit" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }}/>
            <Image src="/Icons/TailwindCSS.svg" alt="TailwindCSS" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
        </div>
    );
};

export const AboutBackend: React.FC<{}> = () => {
    const iconSize = 48;
    const marginSize = 8;
    return(
        <div className="flex">
            <Image src="/Icons/Node.js.svg" alt="Node.js" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/Keystone.svg" alt="Keystone.js" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/Ktor.svg" alt="Ktor" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
        </div>
    );
};

export const AboutDatabases: React.FC<{}> = () => {
    const iconSize = 48;
    const marginSize = 8;
    return(
        <div className="flex">
            <Image src="/Icons/MongoDB.svg" alt="MongoDB" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/Supabase.svg" alt="Supabase" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/PostgresSQL.svg" alt="PostgresSQL" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/QLDB.svg" alt="AWS Quantum Ledger Data Base" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
        </div>
    );
};

export const AboutServers: React.FC<{}> = () => {
    const iconSize = 48;
    const marginSize = 8;
    return(
        <div className="flex">
            <Image src="/Icons/AWS.svg" alt="AWS" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/Amplify.svg" alt="AWS Amplify" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/S3Bucket.svg" alt="AWS S3 Bucket" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/Heroku.svg" alt="Heroku" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/Vercel.svg" alt="Vercel" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
        </div>
    );
};

export const AboutTools: React.FC<{}> = () => {
    const iconSize = 48;
    const marginSize = 8;
    return(
        <div className="flex">
            <Image src="/Icons/VSCode.svg" alt="VSCode" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/AndroidStudio.svg" alt="Android Studio" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            <Image src="/Icons/GitHub.svg" alt="Github" width={iconSize} height={iconSize} style={{ marginRight: marginSize, marginTop: marginSize }} />
            
            
        </div>
    );
};

interface Technology {
    name: string;
    content: React.ReactNode; // Represents any valid React child element
  }
  
  export const TechnologyDropdown: React.FC<{}> = () => {
    const [activeTechnology, setActiveTechnology] = useState<Technology | null>(null);
    const controls = useAnimation();

    const technologies = [
        { name: "Languages", content: <AboutLanguages /> },
        { name: "Frameworks", content: <AboutFrameworks /> },
        { name: "Backend", content: <AboutBackend />},
        { name: "Databases", content: <AboutDatabases />},
        { name: "Servers", content: <AboutServers />},
        { name: "Tools", content: <AboutTools />},
      ];
  
    const variants = {
      hidden: {
        opacity: 0,
        height: 0,
        transition: { duration: 10.3, easeInOut },
      },
      visible: {
        opacity: 1,
        height: "auto",
        transition: { duration: 10.3, easeInOut },
      },
    };
  
    const handleButtonClick = (technology: Technology) => {
        const newState = technology === activeTechnology ? null : technology;
        setActiveTechnology(newState); // Update state first
    
        // Animate based on the new state
        controls.start(newState ? "visible" : "hidden"); // Ensure hidden on same click
      };
    
    
      return (
        <div className="">
            <div className="flex flex-wrap justify-center mb-4"> 
            {technologies.map((technology) => (
              <button
                key={technology.name}
                className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
                style={{ marginRight: 8 }}
                onClick={() => handleButtonClick(technology)}
              >
                {technology.name}
              </button>
            ))}
          </div>
          {activeTechnology && (
            <motion.div animate={controls} variants={variants}>
              {activeTechnology.content}
            </motion.div>
          )}
        </div>
      );
    };


  