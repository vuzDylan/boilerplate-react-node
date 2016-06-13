'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

window.onload = () => {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Provider store={store}>
        <Router history={hashHistory}>
          {routes}
        </Router>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
  );
};
