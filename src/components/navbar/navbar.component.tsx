import React from 'react';

import classes from './navbar.module.scss';

import Icon from '../icon/icon.component';
import LocalePicker from './locale-picker/locale-picker.component';

import { EMAIL, PHONE_NUMBER } from '../../constants/strings';
import { SECTIONS } from '../../constants/enums';

type NavbarProps = {
  goToSection: (section: SECTIONS) => void;
};

const Navbar = ({ goToSection }: NavbarProps) => {
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
      <div className={classes.sectionsContainer}>
        <span onClick={() => goToSection(SECTIONS.SERVICES)}>SERVICIOS</span>
        <span onClick={() => goToSection(SECTIONS.PORTFOLIO)}>TRABAJOS</span>
        <span onClick={() => goToSection(SECTIONS.ABOUT_ME)}>SOBRE MÍ</span>
        <span onClick={() => goToSection(SECTIONS.CONTACT)}>CONTACTO</span>
      </div>
      <LocalePicker />
    </div>
  );
};

export default Navbar;
