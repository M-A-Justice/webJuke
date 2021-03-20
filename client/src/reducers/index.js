import { combineReducers } from 'redux';
import searchingReducer from './searching';
import inputReducer from './inputting';

const allReducers = combineReducers({
  input: inputReducer,
  searching: searchingReducer,
});

export default allReducers;
