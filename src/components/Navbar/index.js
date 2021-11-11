import React from 'react';

// constants
import { EXTERNAL_LINKS } from '../../constants';

// assets
import ImgZedLogo from '../../static/images/zed_logo.svg';
import ImgOutlink from '../../static/images/outlink.svg';

// styles
import './styles.scss';

const navLinks = [
  { name: 'proposals', link: EXTERNAL_LINKS.PROPOSALS },
  { name: 'vision paper', link: EXTERNAL_LINKS.VISION_PAPER },
  { name: 'zed run', link: EXTERNAL_LINKS.ZED_RUN },
  { name: 'discord', link: EXTERNAL_LINKS.DISCORD },
];

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="logo">
        <a href="/">
          <img src={ImgZedLogo} alt="zed" />
        </a>
      </div>
      <ul className="nav-items">
        {navLinks.map(({ name, link }, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <span>{name}</span>
              <img src={ImgOutlink} alt="outlink" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
