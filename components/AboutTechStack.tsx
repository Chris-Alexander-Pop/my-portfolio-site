import React, { useEffect, useRef, useState } from "react";
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
            <Image src="/Icons/CPlusPlus.svg" alt="C++" width={iconSize} height={iconSize} style={{ marginRight: 0, marginTop: marginSize }} />
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
            <Image src="/Icons/TailwindCSS.svg" alt="TailwindCSS" width={iconSize} height={iconSize} style={{ marginRight: 0, marginTop: marginSize }} />
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
            <Image src="/Icons/Ktor.svg" alt="Ktor" width={iconSize} height={iconSize} style={{ marginRight: 0, marginTop: marginSize }} />
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
            <Image src="/Icons/QLDB.svg" alt="AWS Quantum Ledger Data Base" width={iconSize} height={iconSize} style={{ marginRight: 0, marginTop: marginSize }} />
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
            <Image src="/Icons/Vercel.svg" alt="Vercel" width={iconSize} height={iconSize} style={{ marginRight: 0, marginTop: marginSize }} />
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
            <Image src="/Icons/GitHub.svg" alt="Github" width={iconSize} height={iconSize} style={{ marginRight: 0, marginTop: marginSize }} />
            
            
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
        setActiveTechnology(newState); 
    
        controls.start(newState ? "visible" : "hidden");
      };
    
    
      return (
        <div className="">
            <div className="flex flex-wrap justify-center mb-4"> 
            {technologies.map((technology) => (
              <button
                key={technology.name}
                className="mr-2 mt-2 px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold w-30"
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

    

export const ScrollWheel = () => {
  const controls = useAnimation();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useRef(0);
  const distX = useRef(0);
  const savedX = useRef(0);

  const technologies = [
    { name: "Languages", content: <AboutLanguages /> },
    { name: "Frameworks", content: <AboutFrameworks /> },
    { name: "Backend", content: <AboutBackend /> },
    { name: "Databases", content: <AboutDatabases /> },
    { name: "Servers", content: <AboutServers /> },
    { name: "Tools", content: <AboutTools /> },
  ];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollWidth = scrollElement.scrollWidth;
      const containerWidth = scrollElement.offsetWidth;

      const animateScroll = () => {
        controls.start({
          x: [savedX.current, -scrollWidth + containerWidth - 20],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
              onUpdate: (value) => {
                savedX.current = value;
              },
            },
          },
        });
      };

      animateScroll();
    }
  }, [controls]);

  const handleDragStart = (_: any, info: any) => {
    setIsDragging(true);
    distX.current = info.point.x
    controls.stop();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const moveX = dragX.current - distX.current + savedX.current; 
    controls.start({
      x: [moveX, -scrollRef.current?.scrollWidth + scrollRef.current?.offsetWidth - 20],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
          onUpdate: (value) => {
            savedX.current = value;
          },
        },
      },
    });
  };

  return (
    <div className="overflow-hidden py-10 w-96">
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: -scrollRef.current?.scrollWidth + scrollRef.current?.offsetWidth - 20, right: 20 }}
        dragElastic={0.1}
        ref={scrollRef}
        animate={controls}
        whileTap={{ cursor: "grabbing" }}
        onDragStart={handleDragStart}
        onDrag={(_, info) => dragX.current = info.point.x}
        onDragEnd={handleDragEnd}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex-none bg-gray-200 p-4 m-1 flex justify-center items-center text-2xl rounded-lg shadow-md"
          >
            {tech.content}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};