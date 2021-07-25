/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Duration from './Duration';
import Volume from './Volume';
import {
  Audio,
  ControlsContainer,
  ButtonsContainer,
  Playing,
  Paused,
} from '../styles/PlayerControls.style';
import {
  isPlaying,
} from '../actions/index';

const PlayerControls = () => {
  const dispatch = useDispatch();
  const isPlayingBool = useSelector((state) => state.isPlaying);

  const handlePlayPause = () => {
    dispatch(isPlaying());
  };

  return (
    <Audio>
      <Duration />
      <ControlsContainer>
        <ButtonsContainer>
          {isPlayingBool === true ? <Paused onClick={handlePlayPause} /> : <Playing onClick={handlePlayPause} />}
        </ButtonsContainer>
        <Volume />
      </ControlsContainer>
    </Audio>
  );
};

export default PlayerControls;
