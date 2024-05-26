import React from "react";
import HomePage from "@/pages/HomePage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Pop'
}

const Home: React.FC = () => {

  return (
    <HomePage/>
  );
};

export default Home;
