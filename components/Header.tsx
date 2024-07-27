'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { GetHoverStates } from '@/lib/helpers';
import dynamic from 'next/dynamic';

const SocialIcon = dynamic(() => import('react-social-icons').then(mod => mod.SocialIcon), { ssr: false });
import { RiHome2Line } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';
import { LiaNetworkWiredSolid } from "react-icons/lia";

/**
 * The Header component is the top navigation bar of the portfolio.
 * It contains links to the home, about, resume, and portfolio pages.
 * It also includes social media icons for LinkedIn, GitHub, and email.
 */
const Header: React.FC<{isHome: boolean}> = ({isHome = false}) => {
  // Get the hover states and corresponding toggling and removal functions
  // for each section of the portfolio.
  const { 
    isHomeHovered,
    isAboutHovered,
    isResumeHovered,
    isPortfolioHovered,
    setIsHomeHovered,
    setIsAboutHovered,
    setIsResumeHovered,
    setIsPortfolioHovered,
    onlyHomeTrue,
    onlyAboutTrue,
    onlyResumeTrue,
    onlyPortfolioTrue 
  } = GetHoverStates();

  // State to track if the client-side rendering has completed.
  const [isClient, setIsClient] = useState(false);

  // Run the effect after the component has rendered.
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header>
      {/* The header container */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Link to the home page */}
          <Link href="/" passHref>
            <div
              onMouseEnter={() => onlyHomeTrue()}
              onMouseLeave={() => setIsHomeHovered(isHome)}
              style={{ marginRight: 15, marginLeft: 12, transform: isHomeHovered ? 'scale(1.2) translate(-2%, +2%)' : 'scale(1)' }}
            >
              {/* Home icon */}
              <RiHome2Line size={30} style={{ marginRight: 0, marginLeft: 15 }} />
            </div>
          </Link>

          {/* Display social media icons if the client-side rendering has completed */}
          {isClient &&
          <div>
              {/* LinkedIn icon */}
              <SocialIcon
                target="_blank"
                url="https://www.linkedin.com/in/chris-a-pop/"
                bgColor="#ffffff"
                fgColor="#000000"
                style={{ marginRight: 5 }}
              />
              {/* GitHub icon */}
              <SocialIcon
                target="_blank"
                url="https://github.com/Chris-Alexander-Pop/"
                bgColor="#ffffff"
                fgColor="#000000"
                style={{ marginRight: 5 }}
              />
              {/* Email icon */}
              <SocialIcon
                target="_blank"
                network="email"
                url="mailto:chrisalexanderpop@gmail.com"
                bgColor="#ffffff"
                fgColor="#000000"
              />
            </div>
          }

          {/* Link to the ECE website */}
          <div onClick={() => {}} style={{ cursor: 'pointer' }}>
            <Link href="https://ece.engineering/" target="_blank" passHref>
              {/* ECE Network icon */}
              <LiaNetworkWiredSolid size={30} style={{ marginRight: 25, marginLeft: 12 }} />
            </Link>
          </div>
        </div>

        {/* Right Icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Link to the about page */}
          <Link href="/about" passHref>
            <div
              onMouseEnter={() => onlyAboutTrue()}
              onMouseLeave={() => setIsAboutHovered(isHome)}
              style={{ marginRight: 12, marginLeft: 12, transform: isAboutHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              {/* Person icon */}
              <BsPerson size={32} />
            </div>
          </Link>

          {/* Link to the resume page */}
          <Link href="/resume" passHref>
            <div
              onMouseEnter={() => onlyResumeTrue()}
              onMouseLeave={() => setIsResumeHovered(isHome)}
              style={{ marginRight: 15, marginLeft: 12, transform: isResumeHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              {/* Document icon */}
              <IoDocumentTextOutline size={30} />
            </div>
          </Link>

          {/* Link to the portfolio page */}
          {/* <Link href="/portfolio" passHref> */}
          <Link href="/" passHref>
            <div
              onMouseEnter={() => onlyPortfolioTrue()}
              onMouseLeave={() => setIsPortfolioHovered(isHome)}
              style={{ marginRight: 25, marginLeft: 12, transform: isPortfolioHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              {/* Projects icon */}
              <GrProjects size={25} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
