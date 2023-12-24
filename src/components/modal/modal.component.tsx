import React, { MouseEvent, ReactElement } from 'react';

import classes from './modal.module.scss';

import CloseButton from '../../../public/icons/close-modal.svg';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string | ReactElement;
};

const Modal = ({ children, isOpen, setIsOpen, title }: ModalProps) => {
  if (!isOpen) return <></>;

  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };

  const handleModalOverlayClick = () => {
    setIsOpen(false);
  };

  const handleModalBoxClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={classes.mainContainer} onClick={handleModalOverlayClick} data-testid='ModalOverlay'>
      <div className={classes.modalBox} onClick={handleModalBoxClick}>
        <div className={classes.modalTitle}>
          {title}
          <CloseButton className={classes.closeButton} onClick={handleCloseButtonClick} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
