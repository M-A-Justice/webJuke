import { combineReducers } from 'redux';
import searchingReducer from './searching';
import inputReducer from './inputting';
import searchResultsReducer from './searchResults';

const allReducers = combineReducers({
  userInput: inputReducer,
  searching: searchingReducer,
  searchResults: searchResultsReducer,
});

export default allReducers;
