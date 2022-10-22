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

const messages: LocaleMessagesType = {
  en: enMessages as JSONType,
  es: esMessages as JSONType,
};

type LocaleContextType = {
  locale: LOCALES;
  setLocale: React.Dispatch<React.SetStateAction<LOCALES>>;
};

const defaultLocaleContextState: LocaleContextType = {
  locale: LOCALES.ES,
  setLocale: () => {},
};

const LocaleContext = createContext<LocaleContextType>(defaultLocaleContextState);

type LocaleProviderProps = {
  children: ReactNode;
};

function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<LOCALES>(LOCALES.ES);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export { LocaleProvider, LocaleContext };
