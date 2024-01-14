import React, { useContext } from 'react';

import classes from './locale-picker.module.scss';

import { LocaleContext } from '../../../context/locale-context';

import { LOCALES } from '../../../constants/enums';
import { LOCALE_PICKER_LABEL, getLocaleButtonLabel } from './locale-picker.aria';

const LocalePicker = () => {
  const { setLocale, locale, getLanguageName } = useContext(LocaleContext);

  const handleLocaleButtonClick = (newLocale: LOCALES) => () => {
    setLocale(newLocale);
  };

  const renderLocaleButton = (buttonLocale: LOCALES) => {
    const isSelected = locale === buttonLocale;
    const className = isSelected ? classes.selectedLocale : '';

    return (
      <button
        onClick={handleLocaleButtonClick(buttonLocale)}
        className={className}
        aria-label={getLocaleButtonLabel(getLanguageName(buttonLocale))}
        role='switch'
        aria-checked={isSelected}
      >
        {buttonLocale.toUpperCase()}
      </button>
    );
  };

  return (
    <fieldset className={classes.mainContainer} role='group' aria-label={LOCALE_PICKER_LABEL}>
      {renderLocaleButton(LOCALES.EN)}
      {renderLocaleButton(LOCALES.ES)}
    </fieldset>
  );
};

export default LocalePicker;
