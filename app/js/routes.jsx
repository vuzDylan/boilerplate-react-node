'use strict';

import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Home from './containers/home';
import Other from './containers/other';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={Home}/>
    <Route component={Other} path='other'/>
  </Route>
);
