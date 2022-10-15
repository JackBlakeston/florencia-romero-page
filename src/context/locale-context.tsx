import React, { createContext, ReactNode, useState } from "react";

import { IntlProvider } from "react-intl";

import esMessages from "../translations/es.json";
import enMessages from "../translations/en.json";

type JSONType = {
  [key: string]: string;
}

type LocaleMessagesType = {
  [key: string]: JSONType;
}

const messages: LocaleMessagesType = {
  en: enMessages as JSONType,
  es: esMessages as JSONType,
};

type LocaleType = "en" | "es";

type LocaleContextType = {
  locale: LocaleType;
  setLocale: React.Dispatch<React.SetStateAction<LocaleType>>;
}

const defaultLocaleContextState: LocaleContextType = {
  locale: "es",
  setLocale: () => { }
}

const LocaleContext = createContext<LocaleContextType>(defaultLocaleContextState);

type LocaleProviderProps = {
  children: ReactNode;
}

function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<LocaleType>("es");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export { LocaleProvider, LocaleContext };