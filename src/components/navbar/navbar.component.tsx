import React from "react";

import classes from './navbar.module.scss';

import Icon from "../icon/icon.component";

import { EMAIL, PHONE_NUMBER } from "../../constants/contact-info";
import LocalePicker from "../locale-picker/locale-picker.component";

const Navbar = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.contactInfoContainer}>
        <div className={classes.contactInfoLine}>
          <Icon name="phone" />
          <span>{PHONE_NUMBER}</span>
        </div>
        <div className={classes.contactInfoLine}>
          <Icon name="mail" />
          <span>{EMAIL}</span>
        </div>
      </div>
      <LocalePicker />
    </div>
  )
}

export default Navbar;