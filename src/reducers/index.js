import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import viewList from './viewListReducer';
import viewDetail from './viewDetailReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  viewList,
  viewDetail
});

export default rootReducer;
