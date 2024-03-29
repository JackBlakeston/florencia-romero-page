import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';
import Slider from 'react-slick';

import classes from './portfolio-section.module.scss';
import './carousel-styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useScreenType from '../../../hooks/use-screen-type.hook';

import { ATRAE_FLOR_URL } from '../../../constants/strings';
import AtraeLogo from '../../../assets/images/atrae-logo-db.png';
import useCarouselImages from '../../../hooks/use-carousel-images';

const PortfolioSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const allImagesUrls = useCarouselImages();
  const intl = useIntl();
  const { windowWidth } = useScreenType();

  const title = intl.formatMessage({
    id: 'app.sections.portfolio',
  });

  const portfolioLinkText = intl.formatMessage({
    id: 'app.sections.portfolio.here',
  });

  const text = intl.formatMessage({
    id: 'app.sections.portfolio.text',
  });

  const calculateNumberOfSlides = () => {
    if (windowWidth > 1400) return 4;
    if (windowWidth > 950) return 3;
    if (windowWidth > 625) return 2;
    return 1;
  };

  const calculateSlidesToScroll = () => {
    const numberOfSlides = calculateNumberOfSlides();
    if (numberOfSlides > 2) return 2;
    else return 1;
  };

  const renderPortfolioCarousel = () => {
    return (
      <Slider
        infinite
        arrows
        slidesToShow={calculateNumberOfSlides()}
        slidesToScroll={calculateSlidesToScroll()}
        speed={1400}
        autoplay
        autoplaySpeed={4000}
        pauseOnHover
        draggable
        focusOnSelect={false}
      >
        {allImagesUrls?.map((imageUrl) => {
          return (
            <div className={classes.carrouselItemContainer} key={imageUrl}>
              <img className={classes.carrouselItemImage} src={imageUrl} alt={imageUrl} />
            </div>
          );
        })}
      </Slider>
    );
  };

  return (
    <div ref={ref} className={classes.mainContainer}>
      <h2 className={classes.sectionTitle}>{title}</h2>
      <div className={classes.sectionBodyContainer}>
        <div className={classes.portfolioLinkContainer}>
          <a href={ATRAE_FLOR_URL} target='_blank' rel='noopener noreferrer'>
            <img src={AtraeLogo} alt='atrae-logo' />
          </a>
          <div className={classes.portfolioText}>
            <a href={ATRAE_FLOR_URL} target='_blank' rel='noopener noreferrer'>
              {portfolioLinkText}
            </a>
            <span> {text}</span>
          </div>
        </div>
        <div className={classes.carrouselContainer}>{renderPortfolioCarousel()}</div>
      </div>
    </div>
  );
});

export default PortfolioSection;
