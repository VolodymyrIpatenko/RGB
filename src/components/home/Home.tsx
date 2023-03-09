import { Main, Title } from './Home.styled';
import CoachesList from './CoachesList';
import React from 'react';
import { Breakpoint } from 'react-socks';
import HomeComponent from './HomeDesktopDescription';
import MobileHomeComponent from './HomeMobileDescription';
import Gallery from '../gallery/Gallery';

export const titleStyle = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '42px',
    padding: '5px',
    color: '#9BD8B3',
  },
} as const;

const Home: React.FC = () => {
  return (
    <div>
      <Main>
        <MobileHomeComponent />
        <HomeComponent />
        <section>
          <Title>Автори курсу</Title>
          <Breakpoint small down>
            <span style={{ fontSize: '25px' }}>
              Нажміть на фото для того аби дізнатися про автора
            </span>
          </Breakpoint>
          <Breakpoint large up>
            <span style={{ fontSize: '25px' }}>
              Наведіть на фото для того аби дізнатися про автора
            </span>
          </Breakpoint>
          <CoachesList />
        </section>
        <section>
          <Gallery />
        </section>
      </Main>
    </div>
  );
};

export default Home;
