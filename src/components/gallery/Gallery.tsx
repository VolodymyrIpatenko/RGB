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
            marginTop: '100px',
          }}
        >
          Роботи учениць
        </h2>
        <GalleryPhotosComponent />
      </section>
    </>
  );
};

export default Gallery;
