import React from 'react';

import { useIntl } from 'react-intl';

import classes from './navbar.module.scss';

import LocalePicker from './locale-picker/locale-picker.component';
import Icon from '../icon/icon.component';

import { ReactComponent as BurgerMenuIcon } from '../../assets/icons/burger-menu.svg';

import { EMAIL, PHONE_NUMBER } from '../../constants/strings';
import { SECTIONS } from '../../constants/enums';
import { ViewportStatusType } from '../../types';

type NavbarProps = {
  goToSection: (section: SECTIONS) => void;
  viewportStatus: ViewportStatusType;
};

const sections = [SECTIONS.SERVICES, SECTIONS.PORTFOLIO, SECTIONS.ABOUT_ME, SECTIONS.CONTACT];

const Navbar = ({ goToSection, viewportStatus }: NavbarProps) => {
  const intl = useIntl();

  const renderSectionButtons = () => {
    const currentViewedSectionKeyValue = Object.entries(viewportStatus).find((sectionStatus) => {
      return sectionStatus[1] === true;
    });
    const currentViewedSection = currentViewedSectionKeyValue ? currentViewedSectionKeyValue[0] : SECTIONS.TITLE;
    return sections.map((section) => {
      const sectionButtonClasses = currentViewedSection === section ? classes.currentSection : '';
      const sectionName = intl
        .formatMessage({
          id: `app.sections.${section}`,
        })
        .toUpperCase();
      return (
        <div className={sectionButtonClasses} key={sectionName} onClick={() => goToSection(section)}>
          {sectionName}
        </div>
      );
    });
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
      <BurgerMenuIcon className={classes.dropdownIcon} />
    </div>
  );
};

export default Navbar;
