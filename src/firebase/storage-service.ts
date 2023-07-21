import { initializeApp } from 'firebase/app';
import { getStorage, ref as storageRef, listAll, getDownloadURL } from 'firebase/storage';
import { FIREBASE_CONFIG } from './firebase-config';

const firebaseApp = initializeApp(FIREBASE_CONFIG);

const storage = getStorage(firebaseApp, 'gs://florencia-romero-web.appspot.com/');

const carrouselImagesPath = 'carousel-images/';
const carouselImagesFolderRef = storageRef(storage, carrouselImagesPath);

export const getImagesRefList = async () => {
  return (await listAll(carouselImagesFolderRef)).items;
};

export const getAllImageUrls = async () => {
  const imagesRefList = await getImagesRefList();

  return Promise.all(
    imagesRefList.map(async (imageRef) => {
      return await getDownloadURL(imageRef);
    }),
  );
};
