import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';
import Slider from 'react-slick';

import classes from './portfolio-section.module.scss';
import './carousel-styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ATRAE_URL } from '../../../constants/strings';
import AtraeLogo from '../../../assets/images/atrae-logo-db.png';

const importAllImagesFromFolder = (r: __WebpackModuleApi.RequireContext) => {
  return r.keys().map(r);
};

const getCarrouselItemName = (imageUrl: string) => {
  const splitUrl = imageUrl.split('/');
  const fileName = splitUrl[splitUrl.length - 1];
  const itemName = fileName.split('.')[0];
  const itemNameNoPrefix = itemName.split('-')[1];
  return itemNameNoPrefix;
};

const PortfolioSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

  const title = intl.formatMessage({
    id: 'app.sections.portfolio',
  });

  const portfolioLinkText = intl.formatMessage({
    id: 'app.sections.portfolio.here',
  });

  const text = intl.formatMessage({
    id: 'app.sections.portfolio.text',
  });

  const renderPortfolioCarrousel = () => {
    const allImagesUrls = importAllImagesFromFolder(
      require.context('../../../assets/images/portfolio-items', false, /\.(png|jpe?g|svg)$/),
    ) as string[];
    return (
      <Slider
        infinite
        arrows
        slidesToShow={5}
        slidesToScroll={4}
        speed={1400}
        autoplay
        autoplaySpeed={4000}
        pauseOnHover
        draggable
        focusOnSelect={false}
      >
        {allImagesUrls.map((imageUrl, index) => {
          const itemName = getCarrouselItemName(imageUrl);
          return (
            <div className={classes.carrouselItemContainer} key={index}>
              <img className={classes.carrouselItemImage} src={imageUrl} alt={itemName} />
            </div>
          );
        })}
      </Slider>
    );
  };

  return (
    <div ref={ref} className={classes.mainContainer}>
      <div className={classes.sectionTitle}>{title}</div>
      <div className={classes.sectionBodyContainer}>
        <div className={classes.portfolioLinkContainer}>
          <a href={ATRAE_URL} target='_blank' rel='noopener noreferrer'>
            <img src={AtraeLogo} alt='atrae-logo' />
          </a>
          <div className={classes.portfolioText}>
            <a href={ATRAE_URL} target='_blank' rel='noopener noreferrer'>
              {portfolioLinkText}
            </a>
            <span> {text}</span>
          </div>
        </div>
        <div className={classes.carrouselContainer}>{renderPortfolioCarrousel()}</div>
      </div>
    </div>
  );
});

export default PortfolioSection;
