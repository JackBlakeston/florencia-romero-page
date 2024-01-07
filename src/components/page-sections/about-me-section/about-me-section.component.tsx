import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';

import classes from './about-me-section.module.scss';

import Icon from '../../icon/icon.component';

import portrait from '../../../assets/images/portrait.jpg';
import atraeLogoBig from '../../../assets/images/atrae-logo-big.png';
import {
  ATRAE_ABOUT_URL,
  ATRAE_FLOR_URL,
  ATRAE_XI_AWARDS_URL,
  ATRAE_X_AWARDS_URL,
  GMAIL_URL,
  LINKEDIN_URL,
  PROZ_URL,
  SKYPE_URL,
  TWITTER_URL,
  WHITE_SPACE,
} from '../../../constants/strings';

const AboutMeSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

  const title = intl.formatMessage({
    id: 'app.sections.aboutMe',
  });

  const textPart1 = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part1',
  });
  const textPart2 = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part2',
  });
  const textPart3 = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part3',
  });
  const textPart4 = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part4',
  });
  const textPart4a = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part4a',
  });
  const textPart4b = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part4b',
  });
  const textPart4c = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part4c',
  });
  const textPart4d = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part4d',
  });
  const textAtraeName = intl.formatMessage({
    id: 'ATRAE_NAME',
  });
  const textPart4e = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part4e',
  });
  const textPart5 = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part5',
  });
  const textPart6 = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part6',
  });
  const textPart7 = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part7',
  });
  const textPart8 = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part8',
  });
  const textPart9 = intl.formatMessage({
    id: 'app.sections.aboutMe.text.part9',
  });

  const awardsTextPart1 = intl.formatMessage({
    id: 'app.sections.aboutMe.awards.part1',
  });
  const awardsTextPart2 = intl.formatMessage({
    id: 'app.sections.aboutMe.awards.part2',
  });
  const awardsTextPart3 = intl.formatMessage({
    id: 'app.sections.aboutMe.awards.part3',
  });
  const awardsTextPart4 = intl.formatMessage({
    id: 'app.sections.aboutMe.awards.part4',
  });
  const awardsTextPart5 = intl.formatMessage({
    id: 'app.sections.aboutMe.awards.part5',
  });

  const renderAboutMeText = () => {
    return (
      <div className={classes.textSectionContainer}>
        {textPart1} <b>{textPart2}</b>
        {textPart3} <b>{textPart4}</b>
        {textPart4a}
        {textPart4b} <b>{textPart4c}</b>
        {textPart4d}
        {WHITE_SPACE}
        <a href={ATRAE_ABOUT_URL} target='_blank' rel='noreferrer'>
          {textAtraeName}
        </a>
        {WHITE_SPACE}
        {textPart4e}
        {textPart5} <b>{textPart6}</b>
        {textPart7} <b>{textPart8}</b> {textPart9}
      </div>
    );
  };

  const renderAwardsText = () => {
    return (
      <div className={classes.awardsText}>
        {awardsTextPart1}
        {WHITE_SPACE}
        <a href={ATRAE_X_AWARDS_URL} target='_blank' rel='noreferrer'>
          {awardsTextPart2}
        </a>
        {WHITE_SPACE}
        {awardsTextPart3}
        {WHITE_SPACE}
        <a href={ATRAE_XI_AWARDS_URL} target='_blank' rel='noreferrer'>
          {awardsTextPart4}
        </a>
        {WHITE_SPACE}
        {awardsTextPart5}
      </div>
    );
  };

  return (
    <div ref={ref} className={classes.mainContainer}>
      <h2 className={classes.sectionTitle}>{title}</h2>
      <div className={classes.sectionBodyContainer}>
        <div className={classes.linkSectionContainer}>
          <img src={portrait} alt='florencia-romero-portrait' className={classes.portrait} />
          <div className={classes.linkRow}>
            <a href={GMAIL_URL} target='_blank' rel='noopener noreferrer'>
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
          <a href={ATRAE_FLOR_URL} target='_blank' rel='noopener noreferrer'>
            <img src={atraeLogoBig} alt='atrae' className={classes.atraeLogo} />
          </a>
          {renderAwardsText()}
        </div>
        {renderAboutMeText()}
      </div>
    </div>
  );
});

export default AboutMeSection;
