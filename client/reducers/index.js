import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import map from './map.reducer';

export default combineReducers({
  map,
  routing: routerReducer,
});
