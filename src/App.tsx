import React from 'react';

import './styles/global-styles.scss';

import MainLayout from './components/main-layout/main-layout.component';

import { LocaleProvider } from './context/locale-context';
import { ModalProvider } from './context/modal-context';

function App() {
  return (
    <LocaleProvider>
      <ModalProvider>
        <MainLayout />
      </ModalProvider>
    </LocaleProvider>
  );
}

export default App;
