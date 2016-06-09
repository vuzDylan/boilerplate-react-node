'use strict';

import React from 'react';
import Alerts from '../containers/Alerts';


class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Alerts />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
