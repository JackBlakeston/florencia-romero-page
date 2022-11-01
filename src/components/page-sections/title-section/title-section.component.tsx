import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';

import classes from './title-section.module.scss';

import logo from '../../../assets/images/logo.png';
import bookSketch from '../../../assets/images/book-sketch.png';

import { NAME, TRANSLATOR_LANGUAGES } from '../../../constants/strings';

const TitleSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

  return (
    <div className={classes.mainContainer} ref={ref}>
      <div className={classes.titleContainer}>
        <img src={logo} alt='logo-florencia-romero' className={classes.logo} />
        <span>{NAME}</span>
        <span>
          {intl.formatMessage({
            id: 'app.sections.title.traductoraProfesional',
          })}
        </span>
        <span>{TRANSLATOR_LANGUAGES}</span>
      </div>
      <div className={classes.sketchesContainer}>
        <img src={bookSketch} alt='book-sketch' className={classes.bookSketch} />
      </div>
    </div>
  );
});

export default TitleSection;
