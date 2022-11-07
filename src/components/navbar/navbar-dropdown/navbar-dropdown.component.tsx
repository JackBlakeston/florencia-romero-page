import React from 'react';
import { useIntl } from 'react-intl';

import classes from './navbar-dropdown.module.scss';

import LocalePicker from '../locale-picker/locale-picker.component';

import { formatSectionName } from '../utils';

import { sections } from '../../../constants/constants';

import { SECTIONS } from '../../../constants/enums';

type NavbarDropdownProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  goToSection: (section: SECTIONS) => void;
};

const NavbarDropdown = ({ isOpen, setIsOpen, goToSection }: NavbarDropdownProps) => {
  const intl = useIntl();

  if (!isOpen) return null;

  const handleSectionClick = (section: SECTIONS) => () => {
    setIsOpen(false);
    goToSection(section);
  };

  const renderSections = () => {
    return sections.map((section) => {
      const sectionName = formatSectionName(intl, section);
      return (
        <div className={classes.sectionButton} onClick={handleSectionClick(section)} key={section}>
          {sectionName}
        </div>
      );
    });
  };

  return (
    <div className={classes.mainContainer}>
      {renderSections()}
      <LocalePicker />
    </div>
  );
};

export default NavbarDropdown;
