import React from 'react';
import cx from 'clsx';

// assets
import ImgCowboy from '../../static/images/cowboy.svg';

// styles
import './styles.scss';

const CowboyButton = ({ title, link, cowboyText, hasCowboy = false, disabled }) => {
  return (
    <a
      className={cx('cowboy-button__wrapper', disabled && 'disabled')}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="title">{title}</span>
      {hasCowboy && (
        <div className="info-tooltip">
          <img src={ImgCowboy} alt="cowboy" />
          <p>{cowboyText}</p>
        </div>
      )}
    </a>
  );
};

export { CowboyButton };
