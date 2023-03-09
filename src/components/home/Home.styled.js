import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
  background-color: black;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

export const Description = styled.p`
  margin-bottom: 50px;
  line-height: 2;
  letter-spacing: 0.06em;
  font-style: italic;
  font-size: 25px;
  color: white;
`;

export const Authors = styled.ul`
  display: grid;
  @media screen and (min-width: 1199px) {
    display: grid;
    justify-content: center;
    text-align: center;
  }
`;

export const CoachDescription = styled.p`
  padding: 10px;
  text-align: left;
  line-height: 28px;
`;

export const CoachName = styled.h2`
  display: none;
  @media screen and (min-width: 1199px) {
    margin-top: 100px;
  }
`;

export const HomeSection = styled.section`
  width: 1200px;
  height: 800px;
  padding: 15px;
  text-align: center;
  font-size: 20px;
  color: #fc060e;
  background-image: url('https://volodymyripatenko.github.io/victoria-react/rgb/rgb-main.jpeg');
`;
export const MobileHome = styled(HomeSection)`
  width: 400px;
  height: 400px;
  background-image: url('https://volodymyripatenko.github.io/victoria-react/rgb/mobile-logo.jpeg');
`;
