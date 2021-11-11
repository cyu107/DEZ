import React, { Fragment, useEffect, useState } from 'react';
import Slider from 'react-slick';
import moment from 'moment-timezone';

// components
import { Navbar, Footer, CowboyButton, VerticalLink, CommentLink } from '../components';

// hooks
import { useMediaSize } from '../hooks';

// helpers
import { sec2time } from '../helpers';

// constants
import { EXTERNAL_LINKS } from '../constants';

// assets
import ImgDezLogo from '../static/images/dez_logo.png';
import ImgHorseGlitch from '../static/images/horse_glitch.png';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

const SECOND_UNIT = 1000;
const GENESIS_SLIDING_SPEED = 4000;
const COMMUNITY_SLIDING_SPEED = 8000;

const EVENT_TIME = '2021-02-01T00';
const TIMEZONE = 'Australia/Sydney';

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  cssEase: 'linear',
  variableWidth: true,
  touchMove: false
};

const genesisSlidingTexts = [
  '38,000 GENESIS NFT’S',
  '$4,200,000 USD NFT MARKET CAP',
  '6,553 REWARDED RACES',
  '$380,183.16 USD EARNT',
  '7,409 TWITTER FOLLOWS',
  '5,001 DISCORD FANS',
  'PUBLIC VISION PAPER',
  'FREE REWARD TOKEN'
];
const communitySlidingTexts = [
  { title: 'zed run', link: EXTERNAL_LINKS.ZED_RUN },
  { title: 'vision paper', link: EXTERNAL_LINKS.VISION_PAPER },
  { title: 'community', link: EXTERNAL_LINKS.COMMUNITY },
];

const verticalLinks = [
  { title: 'marketplace', link: EXTERNAL_LINKS.MARKETPLACE },
  { title: 'proposals', link: EXTERNAL_LINKS.PROPOSALS },
  { title: 'facebook', link: EXTERNAL_LINKS.FACEBOOK },
  { title: 'nft racing', link: EXTERNAL_LINKS.NFT_RACING },
  { title: 'vision paper', link: EXTERNAL_LINKS.VISION_PAPER },
  { title: 'discord', link: EXTERNAL_LINKS.DISCORD },
  { title: 'opensea', link: EXTERNAL_LINKS.OPENSEA },
  { title: 'stateoftheapps', link: EXTERNAL_LINKS.STATEOFTHEAPPS },
  { title: 'youtube', link: EXTERNAL_LINKS.YOUTUBE },
  { title: 'etherscan', link: EXTERNAL_LINKS.ETHERSCAN },
  { title: 'twitter', link: EXTERNAL_LINKS.TWITTER },
];

const communityComments = [
  'No time for the wife and kids. I need to get home and play zed',
  'Ok... holy shit this is unbelievable.',
  'I love this game!! I\'m so addicted it\'s silly. My friends laugh but once in MOONs, we\'ll see who\'s laughing then. Right ZedOsphere?!',
  'This nft ecosystem has massive potential. I\'m in!',
  'Discovered zed. my life has purpose again!! weeeeeeeee!!!',
  'Got my first genesis. I\'m racing like a mad man',
  'Shout out to all Zed Riders we gonna grow all together on this'
];

const Landing = () => {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const { isMobile } = useMediaSize();

  const initCountdown = () => {
    const eventTime = moment.tz(EVENT_TIME, TIMEZONE);
    const diff = moment(eventTime).diff(moment.tz(TIMEZONE));
    setTimerSeconds(Math.floor(diff / 1000));
  };

  const countdownSeconds = () => {
    setTimeout(() => {
      if (timerSeconds > 0) {
        setTimerSeconds(timerSeconds - 1);
      }
    }, SECOND_UNIT);
  };

  useEffect(() => {
    initCountdown();
  });

  useEffect(() => {
    countdownSeconds();
  }, [timerSeconds]);

  const timeSegments = sec2time(timerSeconds);

  return (
    <div className="landing-wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <section className="hero-section">
        <div className="details">
          <img className="dez" src={ImgDezLogo} alt="dez" />
          <div className="own-share">
            <span>own your share</span>
          </div>
          <div className="introduce-token">
            <h3 className="title">INTRODUCING THE DEZ TOKEN</h3>
            <p className="description">
              ZED RUN BROUGHT YOU PROVABLY-RARE NFT RACEHORSES THAT RACE ON THE BLOCKCHAIN, <br />
              AND NOW WE INTRODUCE $DEZ, A REWARD TOKEN LIKE NO OTHER.
            </p>
          </div>
        </div>
        <div className="actions">
          <CowboyButton
            cowboyText="Have a say"
            title="vision paper"
            link={EXTERNAL_LINKS.VISION_PAPER}
            hasCowboy
          />
          <CowboyButton
            title="DEZ PROPOSALS"
            link={EXTERNAL_LINKS.DEZ_FORUM}
          />
        </div>
      </section>

      {/* Genesis section */}
      <section className="genesis-section">
        <Slider
          {...sliderSettings}
          speed={GENESIS_SLIDING_SPEED}
          autoplaySpeed={GENESIS_SLIDING_SPEED}
          slidesToShow={3}
          className="slider-genesis slider variable-width"
        >
          {genesisSlidingTexts.map((text, index) => (
            <div className="sliding-text__wrapper" key={index}>
              <span>{text}</span>
            </div>
          ))}
        </Slider>

        {/* Triangle & Horse Glitch */}
        <div className="triangle">
          <img src={ImgHorseGlitch} alt="horse-glitch" />
        </div>

        {/* Genesis */}
        <div className="genesis">
          <h3 className="title">25 PRECENT BOUNS</h3>
          <p className="description">
            PHASE 1 - A 25% BONUS DISTRIBUTION OF $DEZ TO <br />
            ALL GENESIS RACEHORSE OWNERS
          </p>
          <div className="count-down">
            {timeSegments.map((segment, index) => (
              <Fragment key={index}>
                <label className="segment">{segment.padStart(2, '0')}</label>
                {index < timeSegments.length - 1 && (
                  <span className="splitter">:</span>
                )}
              </Fragment>
            ))}
          </div>
          <CowboyButton
            title="buy genesis"
            link={EXTERNAL_LINKS.MARKETPLACE}
          />
        </div>
      </section>

      {/* Vertical links section */}
      <section className="vertical-links__section">
        {verticalLinks.map(({ title, link }, index) => (
          <VerticalLink key={index} title={title} link={link} />
        ))}
      </section>

      {/* Community section */}
      <section className="community-section">
        <h3 className="title">WHAT OUR COMMUNITY IS SAYING!</h3>
        <p className="description">
          COMMENTS MADE BY THE ZED RUN COMMUNITY ON DISCORD. DON’T <br />
          TAKE IT FROM US, CHAT TO THEM YOURSELF.
        </p>
        <div className="comments">
          {isMobile ? ([
            <div className="comments-first__line" key={0}>
              <CommentLink comment={communityComments[0]} />
              <CommentLink comment={communityComments[1]} />
              <CommentLink comment={communityComments[2]} />
            </div>,
            <div className="comments-second__line" key={1}>
              <CommentLink comment={communityComments[3]} />
              <CommentLink comment={communityComments[4]} />
              <CommentLink comment={communityComments[5]} />
              <CommentLink />
            </div>,
            <div className="comments-third__line" key={2}>
              <CommentLink comment={communityComments[6]} />
              <CommentLink comment={communityComments[0]} />
              <CommentLink comment={communityComments[1]} />
              <CommentLink />
            </div>
          ]) : ([
            <div className="comments-first__line" key={0}>
              <CommentLink />
              <CommentLink comment={communityComments[0]} />
              <CommentLink comment={communityComments[1]} />
              <CommentLink comment={communityComments[2]} />
              <CommentLink />
            </div>,
            <div className="comments-second__line" key={1}>
              <CommentLink />
              <CommentLink comment={communityComments[3]} />
              <CommentLink comment={communityComments[4]} />
              <CommentLink comment={communityComments[5]} />
              <CommentLink comment={communityComments[6]} />
            </div>
          ])}
        </div>

        <Slider
          {...sliderSettings}
          speed={COMMUNITY_SLIDING_SPEED}
          autoplaySpeed={COMMUNITY_SLIDING_SPEED}
          slidesToShow={2}
          className="slider-community slider variable-width"
        >
          {[].concat(...Array(2).fill(communitySlidingTexts)).map(({ title, link }, index) => (
            <a
              className="sliding-text__wrapper"
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{title}</span>
            </a>
          ))}
        </Slider>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
