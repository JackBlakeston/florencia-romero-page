'use client';

import { RefObject, useEffect, useState } from 'react';

const useIsInViewport = (ref: RefObject<Element>) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsInViewport(entry.isIntersecting), {
      rootMargin: '-200px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  if (ref.current) {
    return isInViewport;
  }
  return true;
};

export default useIsInViewport;
