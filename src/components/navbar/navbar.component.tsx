import React, { useState } from 'react';

import { useIntl } from 'react-intl';

import classes from './navbar.module.scss';

import LocalePicker from './locale-picker/locale-picker.component';
import Icon from '../icon/icon.component';
import NavbarDropdown from './navbar-dropdown/navbar-dropdown.component';

import { ReactComponent as BurgerMenuIcon } from '../../assets/icons/burger-menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

import { EMAIL, PHONE_NUMBER, sections } from '../../constants/strings';
import { SECTIONS } from '../../constants/enums';
import { ViewportStatusType } from '../../types';
import { formatSectionName, getCurrentViewedSection } from './utils';

type NavbarProps = {
  goToSection: (section: SECTIONS) => void;
  viewportStatus: ViewportStatusType;
};

const Navbar = ({ goToSection, viewportStatus }: NavbarProps) => {
  const intl = useIntl();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderSectionButtons = () => {
    const currentViewedSection = getCurrentViewedSection(viewportStatus);
    return sections.map((section) => {
      const sectionButtonClasses = currentViewedSection === section ? classes.currentSection : '';
      const sectionName = formatSectionName(intl, section);
      return (
        <div className={sectionButtonClasses} key={sectionName} onClick={() => goToSection(section)}>
          {sectionName}
        </div>
      );
    });
  };

  const renderDropdownButton = () => {
    if (isDropdownOpen) {
      return <CloseIcon />;
    } else {
      return <BurgerMenuIcon />;
    }
  };

  return (
    <div className={classes.mainContainer}>
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
      <div className={classes.sectionsContainer}>{renderSectionButtons()}</div>
      <LocalePicker />
      <div className={classes.dropdownIconContainer} onClick={handleBurgerMenuClick}>
        {renderDropdownButton()}
      </div>
      <NavbarDropdown
        setIsOpen={setIsDropdownOpen}
        isOpen={isDropdownOpen}
        goToSection={goToSection}
        viewportStatus={viewportStatus}
      />
    </div>
  );
};

export default Navbar;
