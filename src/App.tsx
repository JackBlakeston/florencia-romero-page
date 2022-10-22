import React from 'react';

import './styles/global-styles.scss';

import MainLayout from './components/main-layout/main-layout.component';

import { LocaleProvider } from './context/locale-context';

function App() {
  return (
    <LocaleProvider>
      <MainLayout />
    </LocaleProvider>
  );
}

export default App;
