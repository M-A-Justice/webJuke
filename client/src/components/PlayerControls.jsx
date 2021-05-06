import React from 'react';
import {
  Audio,
  ControlsContainer,
  DurationContainer,
  ButtonsContainer,
  VolumeContainer,
  SliderContainer,
  Slider,
} from '../styles/PlayerControls.style';

const PlayerControls = () => (
  <Audio>
    <SliderContainer>
      <Slider />
    </SliderContainer>
    <ControlsContainer>
      <DurationContainer />
      <ButtonsContainer />
      <VolumeContainer />
    </ControlsContainer>
  </Audio>
);

export default PlayerControls;
