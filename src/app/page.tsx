import React from 'react';
import { LocaleProvider } from '../context/locale-context';
import { ModalProvider } from '../context/modal-context';
import MainLayout from '../components/main-layout/main-layout.component';

export default function Home() {
  return (
    <LocaleProvider>
      <ModalProvider>
        <MainLayout />
      </ModalProvider>
    </LocaleProvider>
  );
}
