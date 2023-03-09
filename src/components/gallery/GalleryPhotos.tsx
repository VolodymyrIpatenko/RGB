import { useState } from 'react';
import mainGallery from './GalleryList.js';
import type GalleryData from '@entities/GalleryData';
import { GalleryList } from './Gallery.styled.js';

const GalleryPhotosComponent = () => {
  const [data, _] = useState<GalleryData[]>(mainGallery);
  return (
    <>
      <GalleryList>
        {data.map(({ photo, alt }) => {
          return (
            <li>
              <img src={photo} alt={alt} loading="lazy" />
            </li>
          );
        })}
      </GalleryList>
    </>
  );
};

export default GalleryPhotosComponent;
