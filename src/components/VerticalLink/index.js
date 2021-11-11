import React from 'react';

// styles
import './styles.scss';

const VerticalLink = ({ title, link }) => {
  return (
    <a
      className="vetical-link_wrapper"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="bg-gradient" />
      <span className="title">{title}</span>
    </a>
  );
};

export { VerticalLink };
