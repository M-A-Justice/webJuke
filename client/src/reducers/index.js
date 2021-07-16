import { combineReducers } from 'redux';
import initSearchReducer from './initSearch';
import inputReducer from './inputting';
import searchResultsReducer from './searchResults';
import pageTokensReducer from './pageTokens';
import showModalReducer from './showModal';
import editQueueReducer from './editQueue';
import isPlayingReducer from './isPlaying';
import isActiveReducer from './isActive';
import activeSearchReducer from './activeSearch';
import displayQueueReducer from './displayQueue';
import durationReducer from './getDuration';
import currentTimeReducer from './currentPlayTime';

const allReducers = combineReducers({
  userInput: inputReducer,
  initSearch: initSearchReducer,
  searchResults: searchResultsReducer,
  pageTokens: pageTokensReducer,
  showModal: showModalReducer,
  queue: editQueueReducer,
  isPlaying: isPlayingReducer,
  isActive: isActiveReducer,
  activeSearch: activeSearchReducer,
  displayQueue: displayQueueReducer,
  duration: durationReducer,
  currentTime: currentTimeReducer,
});

export default allReducers;
