import React, { useState } from 'react';

import { useIntl } from 'react-intl';
import SvgResizer from 'react-svg-resizer';

import classes from './navbar.module.scss';
import LocalePicker from './locale-picker/locale-picker.component';
import NavbarDropdown from './navbar-dropdown/navbar-dropdown.component';

import { formatSectionName, getCurrentViewedSection } from './utils';
import useScreenType from '../../hooks/use-screen-type.hook';

import BurgerMenuIcon from '../../../public/icons/burger-menu.svg';
import CloseIcon from '../../../public/icons/close-modal.svg';
import Logo from '../../../public/logos/logo.svg';

import { sections } from '../../constants/constants';

import { SCREENS, SECTIONS } from '../../constants/enums';
import { ViewportStatusType } from '../../types';

type NavbarProps = {
  goToSection: (section: SECTIONS) => void;
  viewportStatus: ViewportStatusType;
};

const Navbar = ({ goToSection, viewportStatus }: NavbarProps) => {
  const intl = useIntl();
  const { screenType, windowWidth } = useScreenType();

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
    const size = isDropdownOpen ? 28 : 33;
    const key = isDropdownOpen ? 'close' : 'burger';
    const strokeWidth = isDropdownOpen ? '2.8px' : '0.2px';
    const iconComponent = isDropdownOpen ? <CloseIcon /> : <BurgerMenuIcon />;

    return (
      <SvgResizer size={size} scaleByMax key={key} svgProps={{ strokeWidth }}>
        {iconComponent}
      </SvgResizer>
    );
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.logoContainer}>
        <Logo className={classes.logo} onClick={handleSectionClick(SECTIONS.TITLE)} />
      </div>
      <div className={classes.sectionsContainer}>{renderSectionButtons()}</div>
      <LocalePicker />
      <div className={classes.dropdownIconContainer} onClick={handleBurgerMenuClick}>
        {renderDropdownButton()}
      </div>
      <NavbarDropdown setIsOpen={setIsDropdownOpen} isOpen={isDropdownOpen} goToSection={goToSection} />
    </div>
  );
};

export default Navbar;
