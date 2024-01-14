import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';

import classes from './navbar-dropdown.module.scss';

import LocalePicker from '../locale-picker/locale-picker.component';

import { formatSectionName, getCurrentViewedSection } from '../utils';

import { sections } from '../../../constants/constants';

import { SECTIONS } from '../../../constants/enums';
import { SECTIONS_NAVIGATION_LABEL, getSectionButtonLabel } from '../navbar.aria';
import { ViewportStatusType } from '../../../types';
import { MOBILE_NAVBAR_DROPDOWN_MENU_LABEL } from './navbar-dropdown.aria';

type NavbarDropdownProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  goToSection: (section: SECTIONS) => void;
  isCompactNavbar: boolean;
  viewportStatus: ViewportStatusType;
};

const NavbarDropdown = ({ isOpen, setIsOpen, goToSection, isCompactNavbar, viewportStatus }: NavbarDropdownProps) => {
  const intl = useIntl();

  useEffect(() => {
    if (!isCompactNavbar) setIsOpen(false);
  }, [isCompactNavbar, setIsOpen]);

  const handleSectionClick = (section: SECTIONS) => () => {
    setIsOpen(false);
    goToSection(section);
  };

  const renderSections = () => {
    const currentViewedSection = getCurrentViewedSection(viewportStatus);

    return sections.map((section) => {
      const isCurrentSection = currentViewedSection === section;
      const sectionName = formatSectionName(intl, section);

      return (
        <li
          key={sectionName}
          onClick={handleSectionClick(section)}
          aria-label={getSectionButtonLabel(sectionName)}
          role='option'
          aria-selected={isCurrentSection}
        >
          {sectionName}
        </li>
      );
    });
  };

  if (!isOpen) return <></>;
  return (
    <section className={classes.mainContainer} aria-label={MOBILE_NAVBAR_DROPDOWN_MENU_LABEL}>
      <menu className={classes.sectionsContainer} aria-label={SECTIONS_NAVIGATION_LABEL}>
        {renderSections()}
      </menu>
      <LocalePicker />
    </section>
  );
};

export default NavbarDropdown;
