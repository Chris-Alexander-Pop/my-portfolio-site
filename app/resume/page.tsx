import React from "react";
import ResumePage from "@/pages/ResumePage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Pop'
}

const Home: React.FC = () => {

  return (
    <ResumePage/>
  );
};

export default Home;
