
import React from "react";
import Header, { getHoverStates } from "@/_components/Header";
import Avatar from "@/_components/Avatar";
import { HoverProvider } from '../_contexts/HoverContext';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Chris Pop'
}

const Home: React.FC = () => {
  
  const { isAboutHovered, isResumeHovered, isPortfolioHovered } = getHoverStates();
  console.log('isAboutHovered:', isAboutHovered);
  console.log('isResumeHovered:', isResumeHovered);
  console.log('isPortfolioHovered:', isPortfolioHovered);

  return (
    <div>
      <HoverProvider>
        <Header />
      </HoverProvider>
      
      {(isAboutHovered || isResumeHovered || isPortfolioHovered) && (
        <Avatar
          isAnimatingAbout={isAboutHovered}
          isAnimatingResume={isResumeHovered}
          isAnimatingPortfolio={isPortfolioHovered}
        />
      )}
    </div>
  );
};
export default Home;
