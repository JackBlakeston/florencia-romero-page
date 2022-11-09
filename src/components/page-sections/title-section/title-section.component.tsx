import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';

import classes from './title-section.module.scss';

import logo from '../../../assets/images/logo.png';

import { NAME } from '../../../constants/strings';

const TitleSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

  const titleLine2 = intl.formatMessage({
    id: 'app.sections.title.traductoraProfesional',
  });

  const renderWordSoup = () => {
    const wordSoup1a = intl.formatMessage({
      id: 'app.sections.wordSoup1a',
    });
    const wordSoup1aContinued = intl.formatMessage({
      id: 'app.sections.wordSoup1a.continued',
    });
    const wordSoup1b = intl.formatMessage({
      id: 'app.sections.wordSoup1b',
    });
    const wordSoup1cContinued = intl.formatMessage({
      id: 'app.sections.wordSoup1c.continued',
    });
    const wordSoup2a = intl.formatMessage({
      id: 'app.sections.wordSoup2a',
    });
    const wordSoup2aContinued = intl.formatMessage({
      id: 'app.sections.wordSoup2a.continued',
    });
    const wordSoup2b = intl.formatMessage({
      id: 'app.sections.wordSoup2b',
    });
    const wordSoup2bContinued = intl.formatMessage({
      id: 'app.sections.wordSoup2b.continued',
    });
    const wordSoup2c = intl.formatMessage({
      id: 'app.sections.wordSoup2c',
    });
    const wordSoup2cContinued = intl.formatMessage({
      id: 'app.sections.wordSoup2c.continued',
    });
    const wordSoup3a = intl.formatMessage({
      id: 'app.sections.wordSoup3a',
      defaultMessage: '\u200B',
    });
    const wordSoup3aContinued = intl.formatMessage({
      id: 'app.sections.wordSoup3a.continued',
      defaultMessage: '\u200B',
    });
    const wordSoup3b = intl.formatMessage({
      id: 'app.sections.wordSoup3b',
    });
    const wordSoup3bContinued = intl.formatMessage({
      id: 'app.sections.wordSoup3b.continued',
      defaultMessage: '\u200B',
    });
    const wordSoup4a = intl.formatMessage({
      id: 'app.sections.wordSoup4a',
      defaultMessage: '\u200B',
    });
    const wordSoup4aContinued = intl.formatMessage({
      id: 'app.sections.wordSoup4a.continued',
      defaultMessage: '\u200B',
    });
    const wordSoup4b = intl.formatMessage({
      id: 'app.sections.wordSoup4b',
      defaultMessage: '\u200B',
    });
    const wordSoup4bContinued = intl.formatMessage({
      id: 'app.sections.wordSoup4b.continued',
      defaultMessage: '\u200B',
    });
    const wordSoup5 = intl.formatMessage({
      id: 'app.sections.wordSoup5',
    });
    const wordSoup5Continued = intl.formatMessage({
      id: 'app.sections.wordSoup5.continued',
    });
    const wordSoup6 = intl.formatMessage({
      id: 'app.sections.wordSoup6',
    });
    const wordSoup6Continued = intl.formatMessage({
      id: 'app.sections.wordSoup6.continued',
    });
    const wordSoup7 = intl.formatMessage({
      id: 'app.sections.wordSoup7',
    });
    const wordSoup7Continued = intl.formatMessage({
      id: 'app.sections.wordSoup7.continued',
    });

    return (
      <div className={classes.wordSoupContainer}>
        <div className={classes.wordSoupContainer1}>
          <div className={classes.wordSoup1}>
            <p>
              {wordSoup1a} <b>{wordSoup1aContinued}</b>
            </p>
            <p>{wordSoup1b}</p>
            <p>
              <b>{wordSoup1cContinued}</b>
            </p>
          </div>
          <div className={classes.wordSoup2}>
            <p>
              {wordSoup2a} <b>{wordSoup2aContinued}</b>
            </p>
            <p>
              {wordSoup2b} <b>{wordSoup2bContinued}</b>
            </p>
            <p>
              {wordSoup2c} <b>{wordSoup2cContinued}</b>
            </p>
          </div>
        </div>
        <div className={classes.wordSoupContainer2}>
          <div className={classes.wordSoup3}>
            <p>
              {wordSoup3a} <b>{wordSoup3aContinued}</b>
            </p>
            <p>
              {wordSoup3b} <b>{wordSoup3bContinued}</b>
            </p>
          </div>
          <div className={classes.wordSoup4}>
            <p>
              {wordSoup4a} <b>{wordSoup4aContinued}</b>
            </p>
            <p>
              {wordSoup4b} <b>{wordSoup4bContinued}</b>
            </p>
          </div>
        </div>
        <div className={classes.wordSoupContainer3}>
          <p>
            {wordSoup5} <b>{wordSoup5Continued}</b>
          </p>
          <p>
            {wordSoup6} <b>{wordSoup6Continued}</b>
          </p>
          <p>
            {wordSoup7} <b>{wordSoup7Continued}</b>
          </p>
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
      </div>
      {renderWordSoup()}
    </div>
  );
});

export default TitleSection;
