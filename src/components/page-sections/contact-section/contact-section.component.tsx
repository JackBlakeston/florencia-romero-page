import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';

import classes from './contact-section.module.scss';

import Icon from '../../icon/icon.component';

import { EMAIL, FORM_SUBMIT_URL, PHONE_NUMBER } from '../../../constants/strings';
import { ReactComponent as Blob1 } from '../../../assets/shapes/blob-1.svg';

const ContactSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

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

  return (
    <div ref={ref} className={classes.mainContainer}>
      <div className={classes.sectionTitle}>{title}</div>
      <div className={classes.sectionBodyContainer}>
        <div className={classes.sectionSubtitle}>
          <span>{contactSectionText}</span>
          <span>{letsTalkText}</span>
        </div>
        <div className={classes.sectionBodyColumnsContainer}>
          <div className={classes.contactInfoContainer}>
            <Blob1 className={classes.blobOverlay} />
            <div className={classes.contactInfo}>
              <Icon name='phone' />
              <span>{PHONE_NUMBER}</span>
            </div>
            <div className={classes.contactInfo}>
              <Icon name='mail' />
              <span>{EMAIL}</span>
            </div>
          </div>
          <form className={classes.formContainer} action={FORM_SUBMIT_URL} method='post' target='_blank'>
            <label htmlFor='name'>{formLabelName}</label>
            <input name='Name' id='name' type='text' required />
            <label htmlFor='email'>{formLabelEmail}</label>
            <input name='Email' id='email' type='email' required />
            <label htmlFor='message'>{formLabelMessage}</label>
            <textarea name='Message' id='message' required />
            <button type='submit' className={classes.sendButton}>
              {formSubmitText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default ContactSection;
