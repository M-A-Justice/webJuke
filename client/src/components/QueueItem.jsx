/* eslint-disable react/prop-types */
import React from 'react';
// import { useSelector } from 'react-redux';
import {
  ItemContainer,
  ImageContainer,
  InfoContainer,
  Song,
  Artist,
} from '../styles/QueueItem.style';

const QueueItem = ({ song }) => {
  const handleClick = () => {};
  const { snippet } = song;

  return (
    <ItemContainer onClick={handleClick}>
      <ImageContainer />
      <InfoContainer>
        <Song>{snippet.title}</Song>
        <Artist />
      </InfoContainer>
    </ItemContainer>
  );
};

export default QueueItem;
