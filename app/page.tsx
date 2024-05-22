import React from "react";
import Header from "@/_components/Header";
import Avatar from "@/_components/Avatar";
import AboutDescriptionHoverAnimation from "@/_components/AboutDescriptionHoverAnimation";
import AboutDescription from "@/_components/AboutDescription";
import { HoverProvider } from '../_contexts/HoverContext';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Pop'
}

const Home: React.FC = () => {

  return (
    <HoverProvider>
      <body>
        <Header />
        <div className="relative flex items-center justify-center h-screen">
          <div className="absolute flex items-center justify-center">
            <Avatar canAnimate={true} />
            {/* <img src="/avatar.png" alt="Avatar" width={384} height={384} className="object-cover rounded-full overflow-hidden border-8 border-black" /> */}
          </div>
          <div className="absolute ml-88">
            <AboutDescriptionHoverAnimation />
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-96 h-96"></svg> */}
          </div>
          {/* <div className="absolute right-0">
            <AboutDescription/>
          </div> */}
        </div>
      </body>
    </HoverProvider>
  );
};

export default Home;
