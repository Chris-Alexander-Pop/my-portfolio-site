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

export const getHoverStates = () => {
  const { isHovered: isAboutHovered, toggleHovered: setIsAboutHovered } = useHover('about');
  const { isHovered: isResumeHovered, toggleHovered: setIsResumeHovered } = useHover('resume');
  const { isHovered: isPortfolioHovered, toggleHovered: setIsPortfolioHovered } = useHover('portfolio');

  return { isAboutHovered, isResumeHovered, isPortfolioHovered, setIsAboutHovered, setIsResumeHovered, setIsPortfolioHovered };
};

const Header: React.FC<Props> = ({ returnVar = false }) => {
  const { isAboutHovered, isResumeHovered, isPortfolioHovered, setIsAboutHovered, setIsResumeHovered, setIsPortfolioHovered } = getHoverStates();

  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="http://localhost:3000" passHref>
            <div>
              <RiHome2Line size={30} style={{ marginRight: 12, marginLeft: 25 }} />
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
              onMouseEnter={() => setIsAboutHovered(true)}
              onMouseLeave={() => setIsAboutHovered(false)}
              style={{ marginRight: 12, marginLeft: 12, transform: isAboutHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              <BsPerson size={32} />
            </div>
          </Link>

          <Link href="http://localhost:3000/resume" passHref>
            <div
              onMouseEnter={() => setIsResumeHovered(true)}
              onMouseLeave={() => setIsResumeHovered(false)}
              style={{ marginRight: 15, marginLeft: 12, transform: isResumeHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              <IoDocumentTextOutline size={30} />
            </div>
          </Link>

          <Link href="http://localhost:3000/portfolio" passHref>
            <div
              onMouseEnter={() => setIsPortfolioHovered(true)}
              onMouseLeave={() => setIsPortfolioHovered(false)}
              style={{ marginRight: 25, marginLeft: 12, transform: isPortfolioHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              <GrProjects size={25} />
            </div>
          </Link>
        </div>
      </div>
      {returnVar && <pre>{JSON.stringify(getHoverStates(), null, 2)}</pre>}
    </header>
  );
};

export default Header;
