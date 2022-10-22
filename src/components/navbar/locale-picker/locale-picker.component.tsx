import React, { useContext } from 'react';

import classes from './locale-picker.module.scss';

import { LocaleContext } from '../../../context/locale-context';

import { LOCALES } from '../../../constants/enums';

const LocalePicker = () => {
  const { setLocale } = useContext(LocaleContext);

  const handleEnglishClick = () => {
    setLocale(LOCALES.EN);
  };

  const handleSpanishClick = () => {
    setLocale(LOCALES.ES);
  };

  return (
    <div className={classes.localePickerContainer}>
      <span onClick={handleEnglishClick} className={classes.localePickerItem}>
        {LOCALES.EN.toUpperCase()}
      </span>
      <span onClick={handleSpanishClick} className={classes.localePickerItem}>
        {LOCALES.ES.toUpperCase()}
      </span>
    </div>
  );
};

export default LocalePicker;
