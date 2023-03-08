import { Coaches, CoachDescription, CoachName } from './Home.styled';
import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import coachData from './coach';
import type CoachData from '@entities/CoachData';
import { nanoid } from 'nanoid';
const id = nanoid();

const CoachesList: React.FC = () => {
  const [data, _] = useState<CoachData[]>(coachData);
  return (
    <Coaches>
      {data.map(({ photo, alt, description, name }) => {
        return <></>;
      })}
    </Coaches>
  );
};

export default CoachesList;
