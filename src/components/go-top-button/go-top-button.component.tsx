import React from 'react';

import classes from './go-top-button.module.scss';

import { SECTIONS } from '../../constants/enums';

import { ReactComponent as ArrowBox } from '../../assets/icons/arrow-box.svg';

type GoTopButtonProps = {
  goToSection: (section: SECTIONS) => void;
  isVisible: boolean;
};

const GoTopButton = ({ goToSection, isVisible = false }: GoTopButtonProps) => {
  const mainContainerClasses = `${classes.mainContainer} ${isVisible ? classes.visible : ''}`;

  const handleClick = () => {
    goToSection(SECTIONS.TITLE);
  };

  return <ArrowBox className={mainContainerClasses} onClick={handleClick} />;
};

export default GoTopButton;
