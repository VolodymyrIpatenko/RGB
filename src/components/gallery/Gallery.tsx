import React from 'react';
import GalleryPhotosComponent from './GalleryPhotos';

const Gallery: React.FC = () => {
  return (
    <>
      <section>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '43px',
            fontStyle: 'italic',
            color: 'white',
            margin: '70px',
          }}
        >
          Роботи учнів
        </h2>
        <GalleryPhotosComponent />
      </section>
    </>
  );
};

export default Gallery;
