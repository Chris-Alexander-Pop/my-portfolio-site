'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { GetHoverStates } from '@/lib/helpers.js';
import dynamic from 'next/dynamic';

const SocialIcon = dynamic(() => import('react-social-icons').then(mod => mod.SocialIcon), { ssr: false });
import { RiHome2Line } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';
import { LiaNetworkWiredSolid } from "react-icons/lia";

const Header: React.FC<{isHome: boolean}> = ({isHome = false}) => {
  const { isHomeHovered, isAboutHovered, isResumeHovered, isPortfolioHovered, setIsHomeHovered, setIsAboutHovered, setIsResumeHovered, setIsPortfolioHovered, onlyHomeTrue, onlyAboutTrue, onlyResumeTrue, onlyPortfolioTrue } = GetHoverStates();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" passHref>
            <div
            onMouseEnter={() => onlyHomeTrue()}
            onMouseLeave={() => setIsHomeHovered(isHome)}
            style={{ marginRight: 15, marginLeft: 12, transform: isHomeHovered ? 'scale(1.2) translate(-2%, +2%)' : 'scale(1)' }}
            >
              <RiHome2Line size={30} style={{ marginRight: 0, marginLeft: 15 }} />
            </div>
          </Link>

          {isClient &&
          <div>
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
            </div>
          }

          <div onClick={() => {}} style={{ cursor: 'pointer' }}>
            <Link href="https://ece.engineering/" target="_blank" passHref>
              <LiaNetworkWiredSolid size={30} style={{ marginRight: 25, marginLeft: 12 }} />
            </Link>
          </div>
        </div>

        {/* Right Icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/about" passHref>
            <div
              onMouseEnter={() => onlyAboutTrue()}
              onMouseLeave={() => setIsAboutHovered(isHome)}
              style={{ marginRight: 12, marginLeft: 12, transform: isAboutHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              <BsPerson size={32} />
            </div>
          </Link>

          <Link href="/resume" passHref>
            <div
              onMouseEnter={() => onlyResumeTrue()}
              onMouseLeave={() => setIsResumeHovered(isHome)}
              style={{ marginRight: 15, marginLeft: 12, transform: isResumeHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              <IoDocumentTextOutline size={30} />
            </div>
          </Link>

          <Link href="/portfolio" passHref>
            <div
              onMouseEnter={() => onlyPortfolioTrue()}
              onMouseLeave={() => setIsPortfolioHovered(isHome)}
              style={{ marginRight: 25, marginLeft: 12, transform: isPortfolioHovered ? 'scale(1.2)' : 'scale(1)' }}
            >
              <GrProjects size={25} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
