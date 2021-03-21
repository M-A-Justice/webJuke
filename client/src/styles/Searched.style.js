import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 7fr 1fr;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FE5F55;
  height: 100%;
  border-bottom: 4px solid #577399;
  z-index: 1;
`;

export const SearchBar = styled.form`
  display: grid;
  grid-template-columns: 10fr 1fr;
  background-color: #F7F7FF;
  border: 4px solid #577399;
  border-radius: 15px;
  width: 25%;
  height: 22%;
  min-width: 205px;
  min-height: 20px;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.25));
`;

export const SearchInput = styled.input`
  background-color: #F7F7FF;
  border: none;
  border-radius: 10px 0 0 10px;
  padding: 0;
  color: #495867;
  font-size: 1.5vw;
  text-align: center;
  box-shadow: inset 3px 3px 3px rgb(0, 0, 0, 0.25);
  ::placeholder {
    color: #495867;
    font-size 1.5vw;
    text-align: left;
    margin-top: 1%;
    filter: drop-shadow(2, 2, 3, rgba(0, 0, 0, 0.25));
  }
`;

export const SearchSubmit = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: solid 5px #577399;
  background-color: #F7F7FF;
  min-width: 20px;
  box-shadow: inset 3px 3px 3px rgb(0 0 0 / 25%);
`;

export const SearchIcon = styled(Search)`
  color: #577399;
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));
`;

export const SearchResults = styled.div`
  background-color: #F7F7FF;
`;

export const Pagination = styled.div`
  background-color: #F7F7FF;
`;
