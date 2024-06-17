import React from "react";
import PortfolioPage from "@/pages/PortfolioPage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Pop'
}

const Home: React.FC = () => {

  return (
    <PortfolioPage/>
  );
};

export default Home;
