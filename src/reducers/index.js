import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import viewList from './viewListReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  viewList
});

export default rootReducer;
