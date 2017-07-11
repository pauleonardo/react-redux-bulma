import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';

import viewListContainer from './list/viewListContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={viewListContainer} />
  </Route>
);
