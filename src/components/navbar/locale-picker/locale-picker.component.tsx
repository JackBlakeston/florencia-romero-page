import React, { useContext } from 'react';

import classes from './locale-picker.module.scss';

import { LocaleContext } from '../../../context/locale-context';

import { LOCALES } from '../../../constants/enums';

const LocalePicker = () => {
  const { setLocale, locale } = useContext(LocaleContext);

  const handleEnglishClick = () => {
    setLocale(LOCALES.EN);
  };

  const handleSpanishClick = () => {
    setLocale(LOCALES.ES);
  };

  const enClasses = locale === LOCALES.EN ? classes.selectedLocale : '';
  const esClasses = locale === LOCALES.ES ? classes.selectedLocale : '';

  return (
    <div className={classes.localePickerContainer}>
      <div onClick={handleEnglishClick} className={enClasses}>
        {LOCALES.EN.toUpperCase()}
      </div>
      <div onClick={handleSpanishClick} className={esClasses}>
        {LOCALES.ES.toUpperCase()}
      </div>
    </div>
  );
};

export default LocalePicker;
