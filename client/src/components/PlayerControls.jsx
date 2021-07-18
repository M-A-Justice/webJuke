import React from 'react';
import { useSelector } from 'react-redux';
import {
  Audio,
  ControlsContainer,
  DurationSlider,
  DurationContainer,
  ButtonsContainer,
  VolumeContainer,
  SliderContainer,
  Slider,
} from '../styles/PlayerControls.style';

const PlayerControls = () => {
  // const dispatch = useDispatch();
  const duration = useSelector((state) => state.duration);
  const currentTime = useSelector((state) => state.currentTime);
  const { playedSeconds, played } = currentTime;

  let percentage = 0;
  if (typeof played === 'number') {
    percentage = Math.floor(played * 100);
  }

  const formatTime = (time) => `${Math.floor(time / 60)}:${(time % 60).toString().length > 1 ? (time % 60) : '0'.concat((time % 60).toString())}`;

  return (
    <Audio>
      <DurationSlider>
        <SliderContainer>
          <Slider played={percentage} duration={duration} playedSeconds={playedSeconds} />
        </SliderContainer>
        <DurationContainer>
          {`${formatTime(typeof playedSeconds !== 'number' ? 0 : Math.floor(playedSeconds))}/${formatTime(Math.floor(duration))}`}
        </DurationContainer>
      </DurationSlider>
      <ControlsContainer>
        <ButtonsContainer />
        <VolumeContainer />
      </ControlsContainer>
    </Audio>
  );
};

export default PlayerControls;
