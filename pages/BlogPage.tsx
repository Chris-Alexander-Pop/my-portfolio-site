'use client'

import Header from "@/components/Header";
import { HoverProvider } from "@/contexts/HoverContext";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { BlogData, Blogs } from "@/lib/helpers";


/**
 * BlogPage component is the page that displays a blog post from the developer.
 * It uses the HoverProvider context to provide the hover state to its child components.
 * The page is animated using the Framer Motion library.
 *
 * @param {string} params - The slug of the blog post to display
 * @returns {JSX.Element} The BlogPage component
 */
const BlogPage: React.FC<{ slug: string }> = (params) => {
    // Initialize animation controls
    const controls = useAnimation();
    const data = Blogs(params.slug) as BlogData;

    // Define animation variants
    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
            display: "block",
        },
        initial: {
            opacity: 0,
            y: 10,
            display: "none",
        },
    };

    const [imageHeight, setimageHeight] = useState<number>(0);

    // Set initial animation state and start the animation when controls change
    useEffect(() => {
        controls.set("initial");
        controls.start("visible");
        console.log(`Displaying the slug: ${params.slug}`);

        /**
         * Updates the image width based on the window's inner width.
         *
         * This function is called when the window is resized. It retrieves the current width of the window using `window.innerWidth` and updates the `imageHeight` state variable with the new value.
         *
         * @return {void} This function does not return a value.
         */
        const handleResize = () => {
            setimageHeight(window.innerWidth);
        };

        // Set initial width
        handleResize();

        // Update width on resize
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [controls, params.slug]);

    // Return the BlogPage component
    return (
        <HoverProvider>
            {/* Animate the page using the Framer Motion library */}
            <motion.div
                layout
                animate={controls}
                variants={variants}
                className="flex flex-col items-center justify-center min-h-screen px-4"
            >
                {/* Render the Header component with the isHome prop set to false */}
                <div className="sticky top-0 z-50">
                    <Header isHome={false} />
                </div>

                {/* Content container centered on the page */}
                {data.name === "Not Found" ? (
                        <p className="text-lg text-center">Blogpost &quot;{params.slug}&quot; not found.</p>
                ): (
                    <div>
                        <br />
                        <p className="text-5xl text-center">{data.title}</p>
                        <br />
                        <p className="text-lg text-center">{data.name} | {data.date}</p>
                        <br />
                        {data.paragraphs.map((paragraph, index) => (
                            paragraph.startsWith("/") ? 
                            (
                                <div key={index} className="relative flex justify-center">
                                    <Image src={paragraph} key={index} alt="" width={0} height={0} sizes="100vw" style={{ height: imageHeight / 4.5, width: 'auto' }}/>
                                </div>
                            )
                            :
                            <React.Fragment key={index}>
                                <p className="text-md text-center relative">
                                    <br />
                                    {paragraph}
                                </p>
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </motion.div>
        </HoverProvider>
    );
};

export default BlogPage;
