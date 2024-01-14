import React, { useContext } from 'react';

import classes from './locale-picker.module.scss';

import { LocaleContext } from '../../../context/locale-context';

import { LOCALES } from '../../../constants/enums';

const LocalePicker = () => {
  const { setLocale, locale } = useContext(LocaleContext);

  const handleLocaleButtonClick = (newLocale: LOCALES) => () => {
    setLocale(newLocale);
  };

  const renderLocaleButton = (buttonLocale: LOCALES) => {
    const className = locale === buttonLocale ? classes.selectedLocale : '';

    return (
      <button onClick={handleLocaleButtonClick(buttonLocale)} className={className}>
        {buttonLocale.toUpperCase()}
      </button>
    );
  };

  return (
    <fieldset className={classes.mainContainer}>
      {renderLocaleButton(LOCALES.EN)}
      {renderLocaleButton(LOCALES.ES)}
    </fieldset>
  );
};

export default LocalePicker;
