import React from "react";
import PortfolioPage from "@/pages/PortfolioPage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Pop'
}

/**
 * Home component is the main component of the portfolio page.
 * It renders the PortfolioPage component.
 *
 * @returns {JSX.Element} The Home component.
 */
const Home: React.FC = () => {

  // This function component returns the PortfolioPage component.
  // The PortfolioPage component is the main component of the portfolio page.
  // It contains the entire content of the portfolio page.
  // The PortfolioPage component is rendered when the user visits the portfolio page.
  
  return (
    // Render the PortfolioPage component.
    // The PortfolioPage component is responsible for rendering the entire content of the portfolio page.
    <PortfolioPage/>
  );
};

export default Home;
