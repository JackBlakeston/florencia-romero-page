import React, { useContext } from 'react';

import classes from '../navbar.module.scss';

import { LocaleContext } from '../../../context/locale-context';

const LocalePicker = () => {
  const { setLocale } = useContext(LocaleContext);

  const handleEnglishClick = () => {
    setLocale('en');
  };

  const handleSpanishClick = () => {
    setLocale('es');
  };

  return (
    <div className={classes.localePickerContainer}>
      <span onClick={handleEnglishClick} className={classes.localePickerItem}>
        EN
      </span>
      <span onClick={handleSpanishClick} className={classes.localePickerItem}>
        ES
      </span>
    </div>
  );
};

export default LocalePicker;
