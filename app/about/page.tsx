import React from "react";
import AboutPage from "@/pages/AboutPage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Pop'
}

/**
 * Home component is the main component of the about page.
 * It renders the AboutPage component.
 *
 * @returns {JSX.Element} The Home component.
 */
const Home: React.FC = () => {

  // This function component returns the AboutPage component.
  // The AboutPage component is responsible for rendering the content of the about page.
  // It contains the entire content of the about page.
  // The AboutPage component is rendered when the user visits the about page.
  
  return (
    // Render the AboutPage component.
    // The AboutPage component is responsible for rendering the entire content of the about page.
    <AboutPage/>
  );
};

export default Home;
