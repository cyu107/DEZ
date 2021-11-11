import React from 'react';

// hooks
import { useMediaSize } from '../../hooks';

// constants
import { EXTERNAL_LINKS } from '../../constants';

// styles
import './styles.scss';

const footerLinks = [
  { name: 'marketplace', link: EXTERNAL_LINKS.MARKETPLACE },
  { name: 'proposals', link: EXTERNAL_LINKS.PROPOSALS },
  { name: 'nft racing', link: EXTERNAL_LINKS.NFT_RACING },
  { name: 'facebook', link: EXTERNAL_LINKS.FACEBOOK },
  { name: 'vision paper', link: EXTERNAL_LINKS.VISION_PAPER },
  { name: 'discord', link: EXTERNAL_LINKS.DISCORD },
];

const Footer = () => {
  const { isMobile } = useMediaSize();

  return (
    <footer className="footer-wrapper">
      {isMobile && (
        <ul className="footer-links">
          {footerLinks.map(({ name, link }, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
      <p>ENJOY THE RIDE TOGETHER. COPYRIGHT ©ZΞD</p>
    </footer>
  );
};

export { Footer };
