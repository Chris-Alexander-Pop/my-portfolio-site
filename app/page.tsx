// Home.tsx
import React from "react";
import Header from "./Header";
import { HoverProvider } from './HoverContext';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Chris Pop'
}

const Home: React.FC = () => {
  return (
    <HoverProvider>
      <Header />


      
    </HoverProvider>
    
  );
};
export default Home;
