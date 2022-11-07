import { useState, useEffect } from 'react';
import { BREAKPOINTS, SCREENS } from '../constants/enums';

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

const useScreenType = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let screenType: SCREENS;
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

  return { windowWidth, screenType };
};

export default useScreenType;
