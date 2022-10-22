import { RefObject, useEffect, useMemo, useState } from 'react';

const useIsInViewport = (ref: RefObject<any>) => {
  const [isInViewport, setIsInViewport] = useState(false);

  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => setIsInViewport(entry.isIntersecting), { rootMargin: '-200px' }),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isInViewport;
};

export default useIsInViewport;
