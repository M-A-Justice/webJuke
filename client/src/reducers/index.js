import { combineReducers } from 'redux';
import searchingReducer from './searching';
import inputReducer from './inputting';
import searchResultsReducer from './searchResults';
// import pageTokensReducer from './pageTokens';
import showModalReducer from './showModal';
import addToQueueReducer from './addToQueue';

const allReducers = combineReducers({
  userInput: inputReducer,
  searching: searchingReducer,
  searchResults: searchResultsReducer,
  // pageTokens: pageTokensReducer,
  showModal: showModalReducer,
  queue: addToQueueReducer,
});

export default allReducers;
