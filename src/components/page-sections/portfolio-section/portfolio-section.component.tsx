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

  const renderPortfolioCarrousel = () => {
    const allImagesUrls = importAllImagesFromFolder(
      require.context('../../../assets/images/portfolio-items', false, /\.(png|jpe?g|svg)$/),
    ) as string[];
    return (
      <Slider
        infinite
        arrows
        slidesToShow={6}
        focusOnSelect={false}
        speed={400}
        slidesToScroll={5}
        autoplay
        autoplaySpeed={3000}
        pauseOnHover
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

  const title = intl.formatMessage({
    id: 'app.sections.portfolio.sectionTitle',
  });

  const portfolioLinkText = intl.formatMessage({
    id: 'app.sections.portfolio.atraeLink',
  });

  return (
    <div ref={ref} className={classes.mainContainer}>
      <div className={classes.sectionTitle}>{title}</div>
      <div className={classes.sectionBodyContainer}>
        <div className={classes.portfolioLinkContainer}>
          <a href={ATRAE_URL} target='_blank' rel='noopener noreferrer'>
            <img src={AtraeLogo} alt='atrae-logo' />
          </a>
          <span>{portfolioLinkText}</span>
        </div>
        <div className={classes.carrouselContainer}>{renderPortfolioCarrousel()}</div>
      </div>
    </div>
  );
});

export default PortfolioSection;
