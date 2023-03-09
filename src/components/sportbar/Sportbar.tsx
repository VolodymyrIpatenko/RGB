import React, { useState } from 'react';
import Menu from './data';
import { SportbarMain, Button } from './SportbarGallery.styled';
import type ProductsData from '@entities/SportBarData';
import './SportbarModal.styled.js';
import ImageModal from './ImgModal';

const GalleryReact: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [items, setItems] = useState<ProductsData[]>(Menu);

  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    setSelectedImage(parseInt(event.currentTarget.id));
  }

  function handleModalClose() {
    setSelectedImage(null);
  }

  interface ImgListProps {
    itemsGallery: ProductsData[];
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  }

  function ProductsGalleryList({ itemsGallery, handleClick }: ImgListProps): JSX.Element {
    return (
      <>
        {items.map(({ image, description }, index) => (
          <Button id={String(index)} onClick={handleClick}>
            Детальніше
          </Button>
        ))}
      </>
    );
  }

  return (
    <SportbarMain>
      <section>
        {selectedImage !== null ? (
          <ImageModal imageObj={items[selectedImage]} handleClose={handleModalClose} />
        ) : (
          <ProductsGalleryList itemsGallery={items} handleClick={handleImageClick} />
        )}
      </section>
    </SportbarMain>
  );
};

export default GalleryReact;
