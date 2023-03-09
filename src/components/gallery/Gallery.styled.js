import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  gap: 20px;
  @media screen and (min-width: 1199px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    padding: 50px;
  }
`;
