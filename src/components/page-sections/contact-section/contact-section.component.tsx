import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';

import classes from './contact-section.module.scss';

import Icon from '../../icon/icon.component';

import { EMAIL, FORM_SUBMIT_URL, PHONE_NUMBER } from '../../../constants/strings';

const ContactSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

  const title = intl.formatMessage({
    id: 'app.sections.contact.sectionTitle',
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

  const formSubmitText = intl.formatMessage({
    id: 'app.sections.contact.form.send',
  });

  return (
    <div ref={ref} className={classes.mainContainer}>
      <div className={classes.sectionTitle}>{title}</div>
      <span>{contactSectionText}</span>
      <span>{letsTalkText}</span>
      <div className={classes.sectionBodyColumnsContainer}>
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
        <form action={FORM_SUBMIT_URL} method='post' target='_blank'>
          <div>
            <label htmlFor='name'>{formLabelName}</label>
            <input name='Name' id='name' type='text' required />
          </div>
          <div>
            <label htmlFor='email'>{formLabelEmail}</label>
            <input name='Email' id='email' type='email' required />
          </div>
          <div>
            <label htmlFor='message'>{formLabelMessage}</label>
            <input name='Message' id='message' type='text' required />
          </div>
          <div>
            <input type='submit' value={formSubmitText} />
          </div>
        </form>
      </div>
    </div>
  );
});

export default ContactSection;
