import { Main, Title } from './Home.styled';
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
    <Main>
      <MobileHomeComponent />
      <HomeComponent />
      <section style={{ color: 'white' }}>
        <Title>Автори курсу</Title>
        <h2>Вікторія Ткачук</h2>
        <img src="https://volodymyripatenko.github.io/victoria-react/rgb/vika.jpeg" alt="" />
        <ul></ul>
      </section>
      <section>
        <Gallery />
      </section>
    </Main>
  );
};

export default Home;
