import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';

import classes from './title-section.module.scss';

import logo from '../../../assets/images/logo.png';

import { NAME } from '../../../constants/strings';

const TitleSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

  const subtitle = intl.formatMessage({
    id: 'app.sections.title.traductoraProfesional',
  });

  return (
    <div className={classes.mainContainer} ref={ref}>
      <div className={classes.titleContainer}>
        <img src={logo} alt='logo-florencia-romero' className={classes.logo} />
        <h1>{NAME}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className={classes.headerDivider}></div>
    </div>
  );
});

export default TitleSection;
