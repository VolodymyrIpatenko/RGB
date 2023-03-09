import { Main, Title } from './Home.styled';
import CoachesList from './CoachesList';
import React from 'react';
import HomeComponent from './HomeDesktopDescription';
import MobileHomeComponent from './HomeMobileDescription';

export const titleStyle = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '42px',
    padding: '5px',
    color: 'yellow',
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
