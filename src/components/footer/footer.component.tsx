import React from 'react';

import { useIntl } from 'react-intl';

import classes from './footer.module.scss';

import Icon from '../icon/icon.component';

import {
  COPYRIGHT,
  EMAIL,
  GMAIL_URL,
  LINKEDIN_URL,
  LOGO_DESIGNER,
  PHONE_NUMBER,
  PROZ_URL,
  SKYPE_URL,
  TWITTER_URL,
  WEB_DESIGNER,
} from '../../constants/strings';
import { ReactComponent as Logo } from '../../assets/logos/logo.svg';

const Footer = () => {
  const intl = useIntl();

  const followMeText = intl.formatMessage({
    id: 'app.footer.letsTalk',
  });

  const webDesignTExt = `${intl.formatMessage({
    id: 'app.footer.webDesign',
  })}: ${WEB_DESIGNER}`;

  const logoDesignTExt = `${intl.formatMessage({
    id: 'app.footer.logoDesign',
  })}: ${LOGO_DESIGNER}`;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.topSection}>
        <div className={classes.linksContainer}>
          <span>{followMeText}</span>
          <div className={classes.iconsContainer}>
            <a href={GMAIL_URL} target='_blank' rel='noopener noreferrer'>
              <Icon name='gmailGreen' className='gmailIcon' />
            </a>
            <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
              <Icon name='linkedinGreen' />
            </a>
            <a href={TWITTER_URL} target='_blank' rel='noopener noreferrer'>
              <Icon name='twitterGreen' className='twitterIcon' />
            </a>
            <a href={PROZ_URL} target='_blank' rel='noopener noreferrer'>
              <Icon name='prozGreen' />
            </a>
            <a href={SKYPE_URL} target='_blank' rel='noopener noreferrer'>
              <Icon name='skypeGreen' />
            </a>
          </div>
        </div>
        <div className={classes.logoContainer}>
          <Logo className={classes.logo} />
        </div>
      </div>
      <div className={classes.bottomSection}>
        <div className={classes.contactInfoContainer}>
          <div className={classes.contactInfo}>
            <Icon name='phone' />
            <span>{PHONE_NUMBER}</span>
          </div>
          <div className={classes.contactInfo}>
            <Icon name='mail' />
            <span>{EMAIL}</span>
          </div>
        </div>
        <div className={classes.footnotesContainer}>
          <span>{webDesignTExt}</span>
          <span>{logoDesignTExt}</span>
          <span>{COPYRIGHT}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
