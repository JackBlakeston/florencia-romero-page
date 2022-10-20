import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';

import classes from './title-section.module.scss';

import logo from '../../../assets/images/logo.png';
import pcSketch from '../../../assets/images/pc-sketch.png';
import plantSketch from '../../../assets/images/plant-sketch.png';

import { NAME, TRANSLATOR_LANGUAGES } from '../../../constants/strings';

const TitleSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer} ref={ref}>
        <img src={logo} alt='logo-florencia-romero' className={classes.logo} />
        <div className={classes.titleTextContainer}>
          <span>{NAME}</span>
          <span>
            {intl.formatMessage({
              id: 'app.sections.title.traductoraProfesional',
            })}
          </span>
          <span>{TRANSLATOR_LANGUAGES}</span>
        </div>
      </div>
      <div className={classes.sketchesContainer}>
        <img src={plantSketch} alt='plant-sketch' className={classes.plantSketch} />
        <img src={pcSketch} alt='pc-sketch' className={classes.pcSketch} />
      </div>
    </div>
  );
});

export default TitleSection;
