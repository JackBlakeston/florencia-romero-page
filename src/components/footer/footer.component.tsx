import React from 'react';

import classes from './footer.module.scss';
import Icon from '../icon/icon.component';

import {
  COPYRIGHT,
  EMAIL,
  GMAIL_URL,
  LEGAL,
  LINKEDIN_URL,
  LOGO_DESIGN,
  PHONE_NUMBER,
  PROZ_URL,
  SKYPE_URL,
  TWITTER_URL,
  WEB_DESIGN,
} from '../../constants/strings';
import Logo from '../../assets/images/logo-green.png';

const Footer = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.topSection}>
        <div className={classes.linksContainer}>
          <span>Sígueme:</span>
          <div className={classes.iconsContainer}>
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
        </div>
        <div className={classes.logoContainer}>
          <img src={Logo} alt='logo' className={classes.logo} />
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
          <span>{COPYRIGHT}</span>
          <span>{WEB_DESIGN}</span>
          <span>{LOGO_DESIGN}</span>
          <span>{LEGAL}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
