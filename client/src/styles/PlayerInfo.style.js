import styled from 'styled-components';

export const PlayerInfoContainer = styled.div`
  display: ${({ queue }) => (queue > 1 ? 'grid' : 'flex')};
  grid-template-columns: ${({ queue }) => (queue > 1 ? '3fr 1fr' : 'none')};
`;

export const NowPlaying = styled.div`
`;
