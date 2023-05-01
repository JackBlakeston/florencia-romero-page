import HTMLReactParser from 'html-react-parser';
import React from 'react';
import { LEGAL_SECTIONS } from '../../constants/enums';
import { LEGAL_NOTICE_TEXT } from './copies/legal-notice-text.copies';
import { PRIVACY_POLICY_TEXT } from './copies/privacy-policy-text.copies';
import classes from './legal-text-modal-content.module.scss';

type LegalTextModalContentProps = {
  legalTextType: LEGAL_SECTIONS;
};

const LegalTextModalContent = ({ legalTextType }: LegalTextModalContentProps) => {
  const isPrivacyPolicyModal = legalTextType === LEGAL_SECTIONS.PRIVACY_POLICY;

  const content = HTMLReactParser(isPrivacyPolicyModal ? PRIVACY_POLICY_TEXT : LEGAL_NOTICE_TEXT);

  return <div className={classes.mainContainer}>{content}</div>;
};

export default LegalTextModalContent;
