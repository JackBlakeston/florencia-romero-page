import React, { useContext } from 'react';

import { useIntl } from 'react-intl';

import classes from './footer.module.scss';

import Icon from '../icon/icon.component';

import {
  COPYRIGHT,
  EMAIL,
  GMAIL_URL,
  LINKEDIN_URL,
  LOGO_DESIGNER,
  LOGO_DESIGNER_URL,
  PHONE_NUMBER,
  PHONE_URL,
  PHOTOGRAPHER,
  PHOTOGRAPHER_URL,
  PROZ_URL,
  SKYPE_URL,
  TWITTER_URL,
  WEB_DESIGNER,
  WEB_DESIGNER_URL,
} from '../../constants/strings';
import { TARGET_BLANK } from '../../constants/constants';

import { ReactComponent as Logo } from '../../assets/logos/logo.svg';
import { ModalContext } from '../../context/modal-context';
import { LEGAL_SECTIONS } from '../../constants/enums';
import LegalTextModalContent from '../legal-text-modal-content/legal-text-modal-content.component';

const Footer = () => {
  const intl = useIntl();
  const { setModalContent, setModalTitle, toggleModal } = useContext(ModalContext);

  const followMeText = intl.formatMessage({
    id: 'app.footer.letsTalk',
  });

  const webDesignText = intl.formatMessage({
    id: 'app.footer.webDesign',
  });

  const logoDesignText = intl.formatMessage({
    id: 'app.footer.logoDesign',
  });

  const photoDesignText = intl.formatMessage({
    id: 'app.footer.photoDesign',
  });

  const legalNoticeText = intl.formatMessage({
    id: 'app.footer.legal',
  });

  const privacyPolicyText = intl.formatMessage({
    id: 'app.footer.privacy',
  });

  const handleLegalLinkClick = (legalSection: LEGAL_SECTIONS) => () => {
    const modalContent = <LegalTextModalContent legalTextType={legalSection} />;
    const isInPrivacyPolicySection = legalSection === LEGAL_SECTIONS.PRIVACY_POLICY;
    const modalTitle = isInPrivacyPolicySection ? privacyPolicyText : legalNoticeText;
    setModalTitle(modalTitle);
    setModalContent(modalContent);
    toggleModal();
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.topSection}>
        <div className={classes.linksContainer}>
          <span>{followMeText}</span>
          <div className={classes.iconsContainer}>
            <a href={GMAIL_URL} target={TARGET_BLANK} rel='noopener noreferrer'>
              <Icon name='gmailGreen' className='gmailIcon' />
            </a>
            <a href={LINKEDIN_URL} target={TARGET_BLANK} rel='noopener noreferrer'>
              <Icon name='linkedinGreen' />
            </a>
            <a href={TWITTER_URL} target={TARGET_BLANK} rel='noopener noreferrer'>
              <Icon name='twitterGreen' className='twitterIcon' />
            </a>
            <a href={PROZ_URL} target={TARGET_BLANK} rel='noopener noreferrer'>
              <Icon name='prozGreen' />
            </a>
            <a href={SKYPE_URL} target={TARGET_BLANK} rel='noopener noreferrer'>
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
          <a href={GMAIL_URL} target={TARGET_BLANK} rel='noopener noreferrer' className={classes.contactInfo}>
            <Icon name='mailDark' />
            <span>{EMAIL}</span>
          </a>
          <a className={classes.contactInfo} href={PHONE_URL}>
            <Icon name='phoneDark' />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
        <div className={classes.footnotesContainer}>
          <span>
            {webDesignText}{' '}
            <a target={TARGET_BLANK} href={WEB_DESIGNER_URL}>
              {WEB_DESIGNER}
            </a>
          </span>
          <span>
            {logoDesignText}
            <a target={TARGET_BLANK} href={LOGO_DESIGNER_URL}>
              {LOGO_DESIGNER}
            </a>
          </span>
          <span>
            {photoDesignText}
            <a target={TARGET_BLANK} href={PHOTOGRAPHER_URL}>
              {PHOTOGRAPHER}
            </a>
          </span>
          <span>{COPYRIGHT}</span>
          <div className={classes.legalSection}>
            <span onClick={handleLegalLinkClick(LEGAL_SECTIONS.LEGAL_NOTICE)}>{legalNoticeText}</span>
            <span onClick={handleLegalLinkClick(LEGAL_SECTIONS.PRIVACY_POLICY)}>{privacyPolicyText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
