import React, { createContext, ReactElement, ReactNode, useState } from 'react';
import Modal from '../components/modal/modal.component';
import { EMPTY_STRING } from '../constants/constants';

export type ModalContextType = {
  isOpen: boolean;
  toggleModal: () => void;
  modalContent: ModalContentType;
  setModalContent: (modalContent: string | ReactElement) => void;
  setModalTitle: (modalTitle: string | ReactElement) => void;
};

type ModalProviderProps = {
  children: ReactNode;
};

type ModalContentType = string | ReactElement | undefined;

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  toggleModal: () => {},
  modalContent: undefined,
  setModalContent: () => {},
  setModalTitle: () => {},
});

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string | ReactElement | undefined>();
  const [modalTitle, setModalTitle] = useState<string | ReactElement>(EMPTY_STRING);

  const toggleModal = (): void => {
    setIsOpen(!isOpen);
  };

  const value: ModalContextType = {
    isOpen,
    toggleModal,
    modalContent,
    setModalContent,
    setModalTitle,
  };

  return (
    <ModalContext.Provider value={value}>
      <Modal isOpen={isOpen} setIsOpen={toggleModal} title={modalTitle}>
        {modalContent}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};
