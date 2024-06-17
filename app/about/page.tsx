import React from "react";
import AboutPage from "@/pages/AboutPage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Pop'
}

const Home: React.FC = () => {

  return (
    <AboutPage/>
  );
};

export default Home;
