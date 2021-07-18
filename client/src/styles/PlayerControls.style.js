import styled, { keyframes } from 'styled-components';

export const Audio = styled.div`
`;

export const ControlsContainer = styled.div`
  background-color: #BDD5EA;
  height: 100%;
`;

export const DurationSlider = styled.div`
`;

export const DurationContainer = styled.div`
  background-color: #BDD5EA;
  font-family: 'Roboto';
  font-size: 2.5vh;
  color: #495867;
  text-shadow: 1px 1px 3px darkslategrey;
  padding-left: 10px;
`;

export const ButtonsContainer = styled.div`
`;

export const VolumeContainer = styled.div`
`;

export const SliderContainer = styled.div`
  height: 5px;
  background-color: #577399;
`;

const slider = (played) => keyframes`
  0% {
    border-left: ${Math.floor(played)}vw solid black;
  }
  100% {
    border-left: 100vw solid black;
  }
`;

export const Slider = styled.div`
  height: 5px;
  width: 5px;
  background-color: white;
  animation: ${({ played }) => slider(played)} ${({ duration, playedSeconds }) => Math.floor(duration - playedSeconds)}s linear;
`;
