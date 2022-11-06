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

  if (windowWidth > BREAKPOINTS.SCREEN) {
    return SCREENS.BIG_SCREEN;
  } else if (windowWidth > BREAKPOINTS.SMALL_SCREEN) {
    return SCREENS.SCREEN;
  } else if (windowWidth > BREAKPOINTS.TABLET) {
    return SCREENS.SMALL_SCREEN;
  } else if (windowWidth > BREAKPOINTS.MOBILE) {
    return SCREENS.TABLET;
  } else {
    return SCREENS.MOBILE;
  }
};

export default useScreenType;
