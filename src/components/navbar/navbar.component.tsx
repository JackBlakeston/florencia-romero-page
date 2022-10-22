import React from 'react';

import { useIntl } from 'react-intl';

import classes from './navbar.module.scss';

import Icon from '../icon/icon.component';
import LocalePicker from './locale-picker/locale-picker.component';

import { EMAIL, PHONE_NUMBER } from '../../constants/strings';
import { SECTIONS } from '../../constants/enums';

type NavbarProps = {
  goToSection: (section: SECTIONS) => void;
};

const sections = [SECTIONS.SERVICES, SECTIONS.PORTFOLIO, SECTIONS.ABOUT_ME, SECTIONS.CONTACT];

const Navbar = ({ goToSection }: NavbarProps) => {
  const intl = useIntl();

  const renderSectionButtons = () => {
    return sections.map((section) => {
      const sectionName = intl
        .formatMessage({
          id: `app.sections.${section}`,
        })
        .toUpperCase();
      return <span onClick={() => goToSection(section)}>{sectionName}</span>;
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
    </div>
  );
};

export default Navbar;
