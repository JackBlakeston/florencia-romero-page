import React, { ChangeEvent, forwardRef, useContext, useState } from 'react';

import { useIntl } from 'react-intl';

import classes from './contact-section.module.scss';

import Icon from '../../icon/icon.component';

import { ReactComponent as Blob1 } from '../../../assets/shapes/blob-1.svg';

import { EMAIL, FORM_SUBMIT_URL, GMAIL_URL, PHONE_NUMBER, PHONE_URL } from '../../../constants/strings';
import { LEGAL_SECTIONS } from '../../../constants/enums';
import { openLegalModal } from '../../../utils/open-modal';
import { ModalContext } from '../../../context/modal-context';

const ContactSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const [isCheckboxAccepted, setIsCheckboxAccepted] = useState(false);

  const intl = useIntl();
  const modalContextData = useContext(ModalContext);

  const title = intl.formatMessage({
    id: 'app.sections.contact',
  });

  const contactSectionText = intl.formatMessage({
    id: 'app.sections.contact.text',
  });

  const letsTalkText = intl.formatMessage({
    id: 'app.sections.contact.letsTalk',
  });

  const formLabelName = intl.formatMessage({
    id: 'app.sections.contact.form.name',
  });

  const formLabelEmail = intl.formatMessage({
    id: 'app.sections.contact.form.email',
  });

  const formLabelMessage = intl.formatMessage({
    id: 'app.sections.contact.form.message',
  });

  const formSubmitText = intl
    .formatMessage({
      id: 'app.sections.contact.form.send',
    })
    .toUpperCase();

  const formPrivacyPolicyText = intl.formatMessage({
    id: 'app.sections.contact.form.privacyPolicy.part1',
  });

  const formPrivacyPolicyLinkText = intl.formatMessage({
    id: 'app.sections.contact.form.privacyPolicy.part2',
  });

  const formPrivacyPolicySmallText = intl.formatMessage({
    id: 'app.sections.contact.form.privacyPolicy.smallText',
  });

  const handleFormCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsCheckboxAccepted(isChecked);
  };

  const handlePrivacyPolicyLinkClick = () => {
    openLegalModal(LEGAL_SECTIONS.PRIVACY_POLICY, intl, modalContextData);
  };

  return (
    <div ref={ref} className={classes.mainContainer}>
      <h2 className={classes.sectionTitle}>{title}</h2>
      <div className={classes.sectionBodyContainer}>
        <div className={classes.sectionSubtitle}>
          <span>{contactSectionText}</span>
          <strong>{letsTalkText}</strong>
        </div>
        <div className={classes.sectionBodyColumnsContainer}>
          <div className={classes.contactInfoContainer}>
            <Blob1 className={classes.blobOverlay} />
            <a href={GMAIL_URL} target='_blank' rel='noopener noreferrer' className={classes.contactInfo}>
              <Icon name='mail' />
              <span>{EMAIL}</span>
            </a>
            <a className={classes.contactInfo} href={PHONE_URL}>
              <Icon name='phone' />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>
          <div className={classes.formContainer}>
            <form className={classes.form} action={FORM_SUBMIT_URL} method='post' target='_blank'>
              <label htmlFor='name'>{formLabelName}</label>
              <input name='Name' id='name' type='text' required />
              <label htmlFor='email'>{formLabelEmail}</label>
              <input name='Email' id='email' type='email' required />
              <label htmlFor='message'>{formLabelMessage}</label>
              <textarea name='Message' id='message' required />
              <div className={classes.checkBoxContainer}>
                <input checked={isCheckboxAccepted} type='checkbox' onChange={handleFormCheckboxChange} />
                {formPrivacyPolicyText}
                <span onClick={handlePrivacyPolicyLinkClick}>{formPrivacyPolicyLinkText}</span>
              </div>
              <button type='submit' className={classes.sendButton} disabled={!isCheckboxAccepted}>
                {formSubmitText}
              </button>
              <div className={classes.smallTextContainer}>{formPrivacyPolicySmallText}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactSection;
