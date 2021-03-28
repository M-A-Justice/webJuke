import styled from 'styled-components';

export const PlayerInfoContainer = styled.div`
  display: ${({ queue }) => (queue > 1 ? 'grid' : 'flex')}
  grid-template-columns: ${({ queue }) => (queue > 1 ? '2fr 1fr' : 'none')}
`;

export const NowPlaying = styled.div`
`;

export const Upcoming = styled.div`
`;
