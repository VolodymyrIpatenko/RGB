import React from 'react';
import GalleryPhotosComponent from './GalleryPhotos';

const Gallery: React.FC = () => {
  return (
    <>
      <section>
        <h2 style={{ textAlign: 'center', fontStyle: 'italic' }}>Роботи учениць</h2>
        <GalleryPhotosComponent />
      </section>
    </>
  );
};

export default Gallery;
