import React from 'react';

import classes from './go-top-button.module.scss';

import { SECTIONS } from '../../constants/enums';

type GoTopButtonProps = {
  goToSection: (section: SECTIONS) => void;
  isVisible: boolean;
};

const GoTopButton = ({ goToSection, isVisible }: GoTopButtonProps) => {
  const mainContainerClasses = `${classes.mainContainer} ${isVisible ? classes.visible : ''}`;

  const handleClick = () => {
    goToSection(SECTIONS.TITLE);
  };

  return <div className={mainContainerClasses} onClick={handleClick}></div>;
};

export default GoTopButton;
