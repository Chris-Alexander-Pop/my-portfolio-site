import React from "react";
import ResumePage from "@/pages/ResumePage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Pop'
}

/**
 * Home component is the main component of the resume page.
 * It renders the ResumePage component.
 *
 * @returns {JSX.Element} The Home component.
 */
const Home: React.FC = () => {

  // This function component returns the ResumePage component.
  // The ResumePage component is the main component of the resume page.
  // It contains the entire content of the resume page.
  // The ResumePage component is rendered when the user visits the resume page.
  
  return (
      // Render the ResumePage component.
      // The ResumePage component is responsible for rendering the entire content of the resume page.
      <ResumePage/>
  );
};

export default Home;
