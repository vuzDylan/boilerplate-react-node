'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Router, browserHistory } from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history={browserHistory}>
      {routes}
    </Router>,
    document.getElementById('app')
  );
};
