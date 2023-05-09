import React from 'react';
import { IntlShape } from 'react-intl';
import LegalTextModalContent from '../components/legal-text-modal-content/legal-text-modal-content.component';
import { LEGAL_SECTIONS } from '../constants/enums';
import { ModalContextType } from '../context/modal-context';

export const openLegalModal = (
  legalSection: LEGAL_SECTIONS,
  intl: IntlShape,
  { setModalContent, setModalTitle, toggleModal }: ModalContextType,
) => {
  const legalNoticeTitleText = intl.formatMessage({
    id: 'app.footer.legal',
  });

  const privacyPolicyTitleText = intl.formatMessage({
    id: 'app.footer.privacy',
  });

  const modalContent = <LegalTextModalContent legalTextType={legalSection} />;
  const isInPrivacyPolicySection = legalSection === LEGAL_SECTIONS.PRIVACY_POLICY;
  const modalTitle = isInPrivacyPolicySection ? privacyPolicyTitleText : legalNoticeTitleText;
  setModalTitle(modalTitle);
  setModalContent(modalContent);
  toggleModal();
};
