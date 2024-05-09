
import React from "react";
import Header from "@/_components/Header";
import Avatar from "@/_components/Avatar";
import { HoverProvider } from '../_contexts/HoverContext';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Chris Pop'
}

const Home: React.FC = () => {
  
  return (
    <div>
      <HoverProvider>
        <Header />
        <Avatar />
      </HoverProvider>
      
      
      
    </div>
  );
};
export default Home;
