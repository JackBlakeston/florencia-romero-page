import React, { createContext, ReactNode, useState } from 'react';

import { IntlProvider } from 'react-intl';

import esMessages from '../translations/es.json';
import enMessages from '../translations/en.json';
import { LOCALES } from '../constants/enums';

type JSONType = {
  [key: string]: string;
};

type LocaleMessagesType = {
  [key: string]: JSONType;
};

type IntlFormatError = Error & { code?: string };

type LocaleContextType = {
  locale: LOCALES;
  setLocale: React.Dispatch<React.SetStateAction<LOCALES>>;
};

type LocaleProviderProps = {
  children: ReactNode;
};

const messages: LocaleMessagesType = {
  en: enMessages as JSONType,
  es: esMessages as JSONType,
};

const defaultLocaleContextState: LocaleContextType = {
  locale: LOCALES.ES,
  setLocale: () => {},
};

const LocaleContext = createContext<LocaleContextType>(defaultLocaleContextState);

function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<LOCALES>(LOCALES.ES);

  const handleError = (err: IntlFormatError) => {
    if (err.code === 'MISSING_TRANSLATION') {
      return;
    }
    console.error(err);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider onError={handleError} locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export { LocaleProvider, LocaleContext };
