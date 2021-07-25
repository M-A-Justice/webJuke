import styled from 'styled-components';
import { Pause } from '@styled-icons/material';
import { Play } from '@styled-icons/foundation';

export const Audio = styled.div`
`;

export const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr;
  background-color: #BDD5EA;
  height: 100%;
`;

export const ButtonsContainer = styled.div`
`;

export const Playing = styled(Play)`
  height: 55px;
  color: #577399;
  filter: drop-shadow(2px 2px 2px darkslategrey);
`;

export const Paused = styled(Pause)`
  height: 55px;
  color: #577399;
  filter: drop-shadow(2px 2px 2px darkslategrey);
`;
