import { Main, Title, VideoStyle } from './Home.styled';
import CoachesList from './CoachesList';
import React, { useContext } from 'react';
import HomeComponent from './HomeDesktopDescription';
import MobileHomeComponent from './HomeMobileDescription';

export const titleStyle = {
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '15px',
    padding: '5px',
    backgroundColor: '#fc060e',
    color: 'white',
  },
} as const;

const Home: React.FC = () => {
  return (
    <div>
      <Main>
        <MobileHomeComponent />
        <HomeComponent />

        <section>
          <Title>Наші тренери</Title>
          <CoachesList />
        </section>
      </Main>
    </div>
  );
};

export default Home;
