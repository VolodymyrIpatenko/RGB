import { Main } from '../home/Home.styled.js';
import { GalleryListColumn, GalleryListRow, DirectionBtn } from './Gallery.styled';
import Typed from 'react-typed';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { useToggle } from '../hooks/customHooks';
import { Breakpoint } from 'react-socks';
import React, { useContext } from 'react';
import GalleryPhotosComponent from './GalleryPhotos';

const titleStyle = {
  title: {
    marginTop: '50p',
    fontWeight: 'bold',
    fontSize: '32px',
    textAlign: 'center',
    borderRadius: '15px',
    padding: '5px',
    backgroundColor: '#fc060e',
    color: 'white',
  },
} as const;

const Gallery: React.FC = () => {
  const [row, setToggleDirection] = useToggle();
  const GalleryDirection = row ? GalleryListColumn : GalleryListRow;

  return (
    <div>
      <Main>
        <Typed
          style={titleStyle.title}
          strings={['Наші фото']}
          typeSpeed={100}
          showCursor={false}
        />
        <Breakpoint xlarge up></Breakpoint>
        <GalleryDirection>
          <GalleryPhotosComponent />
        </GalleryDirection>
      </Main>
    </div>
  );
};

export default Gallery;
