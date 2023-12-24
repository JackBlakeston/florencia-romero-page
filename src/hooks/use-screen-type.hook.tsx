'use client';

import { useState, useEffect } from 'react';
import { BREAKPOINTS, SCREENS } from '../constants/enums';

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

const useScreenType = () => {
  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let screenType: SCREENS = SCREENS.BIG_SCREEN;
  if (windowWidth) {
    if (windowWidth > BREAKPOINTS.SCREEN) {
      screenType = SCREENS.BIG_SCREEN;
    } else if (windowWidth > BREAKPOINTS.SMALL_SCREEN) {
      screenType = SCREENS.SCREEN;
    } else if (windowWidth > BREAKPOINTS.TABLET) {
      screenType = SCREENS.SMALL_SCREEN;
    } else if (windowWidth > BREAKPOINTS.MOBILE) {
      screenType = SCREENS.TABLET;
    } else {
      screenType = SCREENS.MOBILE;
    }
  }

  return { windowWidth, screenType };
};

export default useScreenType;
