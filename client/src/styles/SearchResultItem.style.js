import styled from 'styled-components';
import { Plus } from '@styled-icons/entypo';

export const SearchResultListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

export const ResultItemContainer = styled.a`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: 100%;
  width: 70%;
  background-color: #577399;
  border-radius: 6px;
  box-shadow: 3px 3px 4px rgb(0 0 0 / 25%);
  text-decoration: none;
  color: #F7F7FF;
`;

export const ResultImageContainer = styled.div`
`;

export const ResultImage = styled.div`
`;

export const ResultInfoContainer = styled.div`
`;

export const ResultInfoLeft = styled.div`
`;

export const ResultInfoRight = styled.div`
`;

export const QueueButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QueueButton = styled.button`
  height: 60%;
  width: 50%;
  border: none;
  background-color: #BDD5EA;
  border-radius: 10px;
  box-shadow: inset 3px 3px 4px rgb(0 0 0 / 25%);
  padding: 0;
`;

export const QueueButtonIcon = styled(Plus)`
  color: #577399;
  height: 100%;
`;
