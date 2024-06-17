import React from "react";
import HomePage from "@/pages/HomePage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Pop'
}

/**
 * Home component is the main component of the app.
 * It renders the HomePage component.
 *
 * @returns {JSX.Element} The Home component.
 */
const Home: React.FC = () => {
  // This function component returns the HomePage component.
  // The HomePage component is the main component of the app.
  // It contains the entire content of the app.
  // The HomePage component is rendered when the user visits the root URL of the app.
  
  return (
      // Render the HomePage component.
      // The HomePage component is responsible for rendering the entire content of the app.
      <HomePage/>
  );
};

export default Home;
