import React, { useState } from 'react';

import { useIntl } from 'react-intl';

import classes from './navbar.module.scss';

import LocalePicker from './locale-picker/locale-picker.component';
import NavbarDropdown from './navbar-dropdown/navbar-dropdown.component';

import { formatSectionName, getCurrentViewedSection } from './utils';
import useScreenType from '../../hooks/use-screen-type.hook';

import { ReactComponent as BurgerMenuIcon } from '../../assets/icons/burger-menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { ReactComponent as Logo } from '../../assets/logos/logo.svg';

import { sections } from '../../constants/constants';

import { SCREENS, SECTIONS } from '../../constants/enums';
import { ViewportStatusType } from '../../types';

type NavbarProps = {
  goToSection: (section: SECTIONS) => void;
  viewportStatus: ViewportStatusType;
};

const Navbar = ({ goToSection, viewportStatus }: NavbarProps) => {
  const intl = useIntl();
  const screenType = useScreenType();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSectionClick = (section: SECTIONS) => () => {
    goToSection(section);
  };

  const renderSectionButtons = () => {
    const currentViewedSection = getCurrentViewedSection(viewportStatus);
    return sections.map((section) => {
      const sectionButtonClasses = currentViewedSection === section ? classes.currentSection : '';
      const sectionName = formatSectionName(intl, section);
      return (
        <div className={sectionButtonClasses} key={sectionName} onClick={handleSectionClick(section)}>
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

  const renderLocalePicker = () => {
    if (screenType === SCREENS.MOBILE || screenType === SCREENS.TABLET) {
      return null;
    } else {
      return <LocalePicker />;
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.logoContainer}>
        <Logo className={classes.logo} onClick={handleSectionClick(SECTIONS.TITLE)} />
      </div>
      <div className={classes.sectionsContainer}>{renderSectionButtons()}</div>
      {renderLocalePicker()}
      <div className={classes.dropdownIconContainer} onClick={handleBurgerMenuClick}>
        {renderDropdownButton()}
      </div>
      <NavbarDropdown setIsOpen={setIsDropdownOpen} isOpen={isDropdownOpen} goToSection={goToSection} />
    </div>
  );
};

export default Navbar;
