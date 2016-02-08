'use strict';

import Reat from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Home from './containers/home';
import Other from './containers/other';

export default (
  <Route component={App} path='/officers'>
    <IndexRoute component={Home}/>
    <Route component={Other} path='other'/>
  </Route>
);
