import styled from 'styled-components';

export const Button = styled.button`
  width: 150px;
  padding: 17px;
  height: 50px;
  margin: 15px;
  display: grid;
  place-content: center;
  font-size: 20px;
  border: none;
  border-radius: 7px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(130, 196, 52, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 0 0 10px 2px #7065ff;
  cursor: pointer;
  color: white;
`;

export const SportbarMain = styled.section`
  height: 500px;
  display: grid;
  place-content: center;
`;
