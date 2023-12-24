'use client';

import { useEffect, useState } from 'react';
import { getAllImageUrls } from '../firebase/storage-service';

const useCarouselImages = () => {
  const [carouselImageUrls, setCarouselImageUrls] = useState<string[]>();

  useEffect(() => {
    const fetchImages = async () => {
      const imagelUrls = await getAllImageUrls();
      setCarouselImageUrls(imagelUrls);
    };

    fetchImages();
  }, []);

  return carouselImageUrls;
};

export default useCarouselImages;
