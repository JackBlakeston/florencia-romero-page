import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';

import classes from './title-section.module.scss';

import logo from '../../../assets/images/logo.png';

import { NAME /* TRANSLATOR_LANGUAGES */ } from '../../../constants/strings';

const TitleSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

  const titleLine2 = intl.formatMessage({
    id: 'app.sections.title.traductoraProfesional',
  });

  const renderWordSoup = () => {
    const wordSoup1a = intl.formatMessage({
      id: 'app.sections.wordSoup1a',
    });
    const wordSoup1b = intl.formatMessage({
      id: 'app.sections.wordSoup1b',
    });
    const wordSoup1c = intl.formatMessage({
      id: 'app.sections.wordSoup1c',
    });
    const wordSoup2a = intl.formatMessage({
      id: 'app.sections.wordSoup2a',
    });
    const wordSoup2b = intl.formatMessage({
      id: 'app.sections.wordSoup2b',
    });
    const wordSoup2c = intl.formatMessage({
      id: 'app.sections.wordSoup2c',
    });
    const wordSoup3a = intl.formatMessage({
      id: 'app.sections.wordSoup3a',
    });
    const wordSoup3b = intl.formatMessage({
      id: 'app.sections.wordSoup3b',
    });
    const wordSoup4a = intl.formatMessage({
      id: 'app.sections.wordSoup4a',
    });
    const wordSoup4b = intl.formatMessage({
      id: 'app.sections.wordSoup4b',
    });
    const wordSoup5 = intl.formatMessage({
      id: 'app.sections.wordSoup5',
    });
    const wordSoup6 = intl.formatMessage({
      id: 'app.sections.wordSoup6',
    });
    const wordSoup7 = intl.formatMessage({
      id: 'app.sections.wordSoup7',
    });

    return (
      <div className={classes.wordSoupContainer}>
        <div className={classes.wordSoupContainer1}>
          <div className={classes.wordSoup1}>
            <p>{wordSoup1a}</p>
            <p>{wordSoup1b}</p>
            <p>{wordSoup1c}</p>
          </div>
          <div className={classes.wordSoup2}>
            <p>{wordSoup2a}</p>
            <p>{wordSoup2b}</p>
            <p>{wordSoup2c}</p>
          </div>
        </div>
        <div className={classes.wordSoupContainer2}>
          <div className={classes.wordSoup3}>
            <p>{wordSoup3a}</p>
            <p>{wordSoup3b}</p>
          </div>
          <div>{'TEST'}</div>
          <div className={classes.wordSoup4}>
            <p>{wordSoup4a}</p>
            <p>{wordSoup4b}</p>
          </div>
        </div>
        <div className={classes.wordSoupContainer3}>
          <p>{wordSoup5}</p>
          <p>{wordSoup6}</p>
          <p>{wordSoup7}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.mainContainer} ref={ref}>
      <div className={classes.titleContainer}>
        <img src={logo} alt='logo-florencia-romero' className={classes.logo} />
        <span>{NAME}</span>
        <span>{titleLine2}</span>
        {/* <span>{TRANSLATOR_LANGUAGES}</span> */}
      </div>
      {renderWordSoup()}
    </div>
  );
});

export default TitleSection;
