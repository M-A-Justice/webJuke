/* eslint-disable react/prop-types */
import React from 'react';
import {
  ItemContainer,
  ImageContainer,
  InfoContainer,
  Song,
  Artist,
} from '../styles/QueueItem.style';

const QueueItem = ({ song }) => {
  const handleClick = () => {};

  return (
    <ItemContainer onClick={handleClick}>
      <ImageContainer />
      <InfoContainer>
        <Song>{song}</Song>
        <Artist />
      </InfoContainer>
    </ItemContainer>
  );
};

export default QueueItem;
