import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';

import classes from './about-me-section.module.scss';

import Icon from '../../icon/icon.component';

import portrait from '../../../assets/images/portrait.jpg';
import atraeLogoBig from '../../../assets/images/atrae-logo-big.png';
import { ATRAE_URL, LINKEDIN_URL, NAME, PROZ_URL, SKYPE_URL, TWITTER_URL } from '../../../constants/strings';

const AboutMeSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

  const title = intl.formatMessage({
    id: 'app.sections.aboutMe.sectionTitle',
  });

  const translatorLanguages = intl.formatMessage({
    id: 'app.sections.aboutMe.translatorLanguages',
  });

  const aboutMeText = intl.formatMessage({
    id: 'app.sections.aboutMe.text',
  });

  return (
    <div ref={ref} className={classes.mainContainer}>
      <div className={classes.sectionTitle}>{title}</div>
      <div className={classes.sectionBodyContainer}>
        <div className={classes.linkSectionContainer}>
          <img src={portrait} alt='florencia-romero-portrait' className={classes.portrait} />
          <span className={classes.nameText}>{NAME}</span>
          <span className={classes.languagesText}>{translatorLanguages}</span>
          <div className={classes.linkRow}>
            <a>
              <Icon name='gmail' />
            </a>
            <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
              <Icon name='linkedin' />
            </a>
            <a href={TWITTER_URL} target='_blank' rel='noopener noreferrer'>
              <Icon name='twitter' />
            </a>
            <a href={PROZ_URL} target='_blank' rel='noopener noreferrer'>
              <Icon name='proz' />
            </a>
            <a href={SKYPE_URL} target='_blank' rel='noopener noreferrer'>
              <Icon name='skype' />
            </a>
          </div>
          <a href={ATRAE_URL} target='_blank' rel='noopener noreferrer'>
            <img src={atraeLogoBig} alt='atrae' className={classes.atraeLogo} />
          </a>
        </div>
        <div className={classes.textSectionContainer}>{aboutMeText}</div>
      </div>
    </div>
  );
});

export default AboutMeSection;
