import React from 'react';
import { useIntl } from 'react-intl';

import classes from './navbar-dropdown.module.scss';

import { formatSectionName } from '../utils';

import { sections } from '../../../constants/strings';
import { SECTIONS } from '../../../constants/enums';
import { ViewportStatusType } from '../../../types';
import LocalePicker from '../locale-picker/locale-picker.component';

type NavbarDropdownProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  goToSection: (section: SECTIONS) => void;
  viewportStatus: ViewportStatusType;
};

const NavbarDropdown = ({ isOpen, setIsOpen, goToSection, viewportStatus }: NavbarDropdownProps) => {
  const intl = useIntl();
  if (!isOpen) return null;
  console.log(viewportStatus);

  const handleSectionClick = (section: SECTIONS) => () => {
    setIsOpen(false);
    goToSection(section);
  };

  const renderSections = () => {
    const currentViewedSectionKeyValue = Object.entries(viewportStatus).find((sectionStatus) => {
      return sectionStatus[1] === true;
    });
    const currentViewedSection = currentViewedSectionKeyValue ? currentViewedSectionKeyValue[0] : SECTIONS.TITLE;
    return sections.map((section) => {
      const sectionButtonClasses = `${classes.sectionButton} ${
        currentViewedSection === section ? classes.currentSection : ''
      }`;
      const sectionName = formatSectionName(intl, section);
      return (
        <div className={sectionButtonClasses} onClick={handleSectionClick(section)}>
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
