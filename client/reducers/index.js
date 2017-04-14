import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import options from './options.reducer';

export default combineReducers({
  options,
  routing: routerReducer,
});
