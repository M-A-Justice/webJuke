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

/*
  This component or the slider component needs to be
  rerendered each second to display the appropriate duration
  It can be done similarily to this:

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
*/

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
