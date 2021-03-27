import { combineReducers } from 'redux';
import initSearchReducer from './initSearch';
import inputReducer from './inputting';
import searchResultsReducer from './searchResults';
// import pageTokensReducer from './pageTokens';
import showModalReducer from './showModal';
import addToQueueReducer from './addToQueue';
// import isPlayingReducer from './isPlaying';
import isActiveReducer from './isActive';
import activeSearchReducer from './activeSearch';
import displayQueueReducer from './displayQueue';

const allReducers = combineReducers({
  userInput: inputReducer,
  initSearch: initSearchReducer,
  searchResults: searchResultsReducer,
  // pageTokens: pageTokensReducer,
  showModal: showModalReducer,
  queue: addToQueueReducer,
  // isPlaying: isPlayingReducer,
  isActive: isActiveReducer,
  activeSearch: activeSearchReducer,
  displayQueue: displayQueueReducer,
});

export default allReducers;
