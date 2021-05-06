import React from 'react';
import Queue from './Queue';
import {
  UpcomingContainer,
  UpcomingTitle,
  Title,
} from '../styles/Upcoming.style';

const Upcoming = () => {
  const handleClick = () => {};

  return (
    <UpcomingContainer>
      <UpcomingTitle>
        <Title>
          Upcoming
        </Title>
      </UpcomingTitle>
      <Queue />
    </UpcomingContainer>
  );
};

export default Upcoming;
