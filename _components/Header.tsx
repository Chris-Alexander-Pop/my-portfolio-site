'use client'
import React from 'react';
import Link from 'next/link';
import WebRingComponent from './Webring';
import { useHover } from '../_contexts/HoverContext';

import { SocialIcon } from 'react-social-icons';
import { RiHome2Line } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';

type Props = {
  returnVar?: boolean;
};

export const GetHoverStates = () => {
  const { isHovered: isHomeHovered, toggleHovered: setIsHomeHovered, removeOtherHovers: onlyHomeTrue } = useHover('home');
  const { isHovered: isAboutHovered, toggleHovered: setIsAboutHovered, removeOtherHovers: onlyAboutTrue } = useHover('about');
  const { isHovered: isResumeHovered, toggleHovered: setIsResumeHovered, removeOtherHovers: onlyResumeTrue } = useHover('resume');
  const { isHovered: isPortfolioHovered, toggleHovered: setIsPortfolioHovered, removeOtherHovers: onlyPortfolioTrue } = useHover('portfolio');

  return { isHomeHovered, isAboutHovered, isResumeHovered, isPortfolioHovered, setIsHomeHovered, setIsAboutHovered, setIsResumeHovered, setIsPortfolioHovered, onlyHomeTrue, onlyAboutTrue, onlyResumeTrue, onlyPortfolioTrue };
};

const Header: React.FC<Props> = ({ returnVar = false }) => {
  const { isHomeHovered, isAboutHovered, isResumeHovered, isPortfolioHovered, setIsHomeHovered, setIsAboutHovered, setIsResumeHovered, setIsPortfolioHovered, onlyHomeTrue, onlyAboutTrue, onlyResumeTrue, onlyPortfolioTrue } = GetHoverStates();

  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="http://localhost:3000" passHref>
            <div
            onMouseEnter={() => onlyHomeTrue()}
            onMouseLeave={() => setIsHomeHovered(false)}
            style={{ marginRight: 15, marginLeft: 12, transform: isHomeHovered ? 'scale(1.2) translate(-2%, +2%)' : 'scale(1)' }}
            >
              <RiHome2Line size={30} style={{ marginRight: 0, marginLeft: 15 }} />
            </div>
          </Link>

          <SocialIcon
            target="_blank"
            url="https://www.linkedin.com/in/chris-pop-598b06255/"
            bgColor="#ffffff"
            fgColor="#000000"
            style={{ marginRight: 5 }}
          />
          <SocialIcon
            target="_blank"
            url="https://github.com/Chris-Alexander-Pop/"
            bgColor="#ffffff"
            fgColor="#000000"
            style={{ marginRight: 5 }}
          />
          <SocialIcon
            target="_blank"
            network="email"
            url="mailto:chrisalexanderpop@gmail.com"
            bgColor="#ffffff"
            fgColor="#000000"
          />

          <WebRingComponent />
        </div>

        {/* Right Icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="http://localhost:3000/about" passHref>
            <div
              onMouseEnter={() => onlyAboutTrue()}
              // onMouseLeave={() => setIsAboutHovered(false)}
              style={{ marginRight: 12, marginLeft: 12, transform: isAboutHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              <BsPerson size={32} />
            </div>
          </Link>

          <Link href="http://localhost:3000/resume" passHref>
            <div
              onMouseEnter={() => onlyResumeTrue()}
              // onMouseLeave={() => setIsResumeHovered(false)}
              style={{ marginRight: 15, marginLeft: 12, transform: isResumeHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              <IoDocumentTextOutline size={30} />
            </div>
          </Link>

          <Link href="http://localhost:3000/portfolio" passHref>
            <div
              onMouseEnter={() => onlyPortfolioTrue()}
              // onMouseLeave={() => setIsPortfolioHovered(false)}
              style={{ marginRight: 25, marginLeft: 12, transform: isPortfolioHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              <GrProjects size={25} />
            </div>
          </Link>
        </div>
      </div>
      {returnVar && <pre>{JSON.stringify(GetHoverStates(), null, 2)}</pre>}
    </header>
  );
};

export default Header;
